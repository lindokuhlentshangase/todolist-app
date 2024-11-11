CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR (255),
    completed BOOLEAN  DEFAULT FALSE
);