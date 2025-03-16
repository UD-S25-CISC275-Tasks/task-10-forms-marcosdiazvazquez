import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    // List of at least 8 colors
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
        "brown",
        "gray",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div className="color-picker-container">
            <h3 className="color-picker-title">Change Color</h3>

            <Form>
                <div className="color-options-container">
                    {colors.map((color, index) => (
                        <Form.Check
                            key={index}
                            inline
                            type="radio"
                            id={`color-${color}`}
                            label={color}
                            name="colorGroup"
                            value={color}
                            checked={selectedColor === color}
                            onChange={handleColorChange}
                            className="color-radio-option"
                        />
                    ))}
                </div>
            </Form>

            <div
                data-testid="colored-box"
                className="color-display-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor === "yellow" ? "black" : "white", // For better readability on yellow
                    width: "200px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    marginTop: "16px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
