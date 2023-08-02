import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function UploadedFiles({ files }) {
  return (
    <Card
      className="grid-container"
      style={{
        color: "#4db6ac",
        fontWeight: "bold",
        backgroundColor: "#004d40",
      }}
    >
      {files.map((archivo) => {
        return (
          <CardContent className="card">
            <div className="container">
              <Typography variant="h5" component="h2">
                {archivo.title}
              </Typography>
              <Typography component="h2">
                <p>{archivo.description}</p>
              </Typography>
            </div>
          </CardContent>
        );
      })}
    </Card>
  );
}
