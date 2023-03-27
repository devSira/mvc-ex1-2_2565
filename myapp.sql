-- create table
CREATE TABLE Birds (
    BirdID int NOT NULL PRIMARY key AUTO_INCREMENT,
    R varchar(255),
    G varchar(255),
    B varchar(255),
    Price int,
    TotalPrice int
);

INSERT INTO Birds (R, G, B, Price)
VALUES ('255', '255', '255', '5');

DROP TABLE Birds;
DROP TABLE TotalPrice;

CREATE TABLE TotalPrice (
    ID int NOT NULL PRIMARY key AUTO_INCREMENT,
    TotalPrice int
);

INSERT INTO totalprice (TotalPrice) VALUES (0);