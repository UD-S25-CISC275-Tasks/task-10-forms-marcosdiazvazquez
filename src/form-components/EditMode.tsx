import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State for edit mode, name, and student status
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div className="edit-mode-container">
            <h3 className="edit-mode-title">Edit Mode</h3>

            <div className="edit-mode-switch-container form-check form-switch">
                <input
                    className="edit-mode-switch-input form-check-input"
                    type="checkbox"
                    id="editModeSwitch"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
                <label
                    className="edit-mode-switch-label form-check-label"
                    htmlFor="editModeSwitch"
                >
                    Edit Mode
                </label>
            </div>

            {isEditMode ?
                <div className="edit-form-container">
                    <div className="name-input-group">
                        <label htmlFor="nameInput" className="name-input-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="name-input-field"
                            id="nameInput"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="student-checkbox-group form-check">
                        <input
                            className="student-checkbox-input form-check-input"
                            type="checkbox"
                            id="studentCheckbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        <label
                            className="student-checkbox-label form-check-label"
                            htmlFor="studentCheckbox"
                        >
                            Student
                        </label>
                    </div>
                </div>
            :   <div className="display-info-container">
                    <p className="user-info-text">
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            }
        </div>
    );
}
