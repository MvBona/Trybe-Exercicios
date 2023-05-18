-- Se o modo "safe mode" do MySQL estiver habilitado,
-- o MySQL não executa UPDATE ou DELETE sem uma
-- instrução WHERE que não inclua uma PRIMARY KEY.
-- Podemos desabilitar o "safe mode" com:
-- SET SQL_SAFE_UPDATES = 0;
-- e depois das modificações o habilitarmos novamente com:
-- SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';