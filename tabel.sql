SELECT 
    child.id,
    child.name,
    parent.name AS parent_name
FROM 
    people AS child
LEFT JOIN 
    people AS parent ON child.parent_id = parent.id
ORDER BY 
    child.id;