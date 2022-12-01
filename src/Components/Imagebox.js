import React, { useState } from "react";
import "./Image.css";
import saveAs from "file-saver";
import DownloadIcon from "@mui/icons-material/Download";

const Imagebox = ({ pictures }) => {
  const { img, id } = pictures;
  const [downloadbtn, setDownloadbtn] = useState(false);

  return (
    <>
      <div className="imagebox">
          <img
            src={img}
            onMouseOver={() => setDownloadbtn(true)}
            onMouseOut={() => setDownloadbtn(false)}
            alt="JPEG"
            className="images-all"
          />
          {downloadbtn ? (
            <DownloadIcon
              onClick={() => saveAs(img, "image.jpg")}
              className="icon"
            />
          ) : null}
      </div>
    </>
  );
};

export default Imagebox;
