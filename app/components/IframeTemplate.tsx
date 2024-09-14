import React from "react";

interface IframeTemplateProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
}

const IframeTemplate: React.FC<IframeTemplateProps> = ({
  src,
  title,
  width = "100%",
  height = "600px",
}) => (
  <div style={styles.iframeWrapper}>
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      style={{ border: "none" }}
    />
  </div>
);

const styles = {
  iframeWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100%",
  },
};

export default IframeTemplate;
