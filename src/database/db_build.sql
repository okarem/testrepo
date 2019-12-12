BEGIN;
    DROP TABLE IF EXISTS jpdata CASCADE;
CREATE TABLE jpdata(service_id SERIAL PRIMARY KEY,
        service_name VARCHAR(100) NOT NULL,
        description TEXT,
        service_cost INTEGER NOT NULL DEFAULT 0,
        service_duration INTEGER NOT NULL DEFAULT 30
    );
    
    


INSERT INTO jpdata (service_name,description,service_cost,service_duration) VALUES ('Regular haircut','Regular haircut <br /> shampoo',40,30);

COMMIT;