SELECT employee_id, first_name, RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;
-- OR 
SELECT employee_id, first_name, MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;

-- MID() é equivalente a função SUBSTRING()

-- OR
SELECT employee_id, first_name, DAY(hire_date) 'hire_day'
FROM hr.employees;