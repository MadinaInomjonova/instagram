import { SendOutlined } from "@mui/icons-material";
import { Container } from "../home/home-styled";
import "./create-content.css";

const CreateContent = () => {
  return (
    <Container>
      <div>
        <input type="file" placeholder="Choose an image" />
        <input type="text" placeholder="Description..." />
        <button>
          <SendOutlined />
        </button>
      </div>
    </Container>
  );
};

export default CreateContent;
