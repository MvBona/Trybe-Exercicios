SELECT employee_id, first_name, SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;
-- OR 
SELECT employee_id, first_name, MONTH(hire_date) 'hire_month'
FROM hr.employees;