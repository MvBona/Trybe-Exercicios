SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;