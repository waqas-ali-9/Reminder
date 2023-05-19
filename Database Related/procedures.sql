DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getmessage`()
BEGIN
select userid,concat(first_name,' ',last_name) as 'name',phone,email,ondate,subject,text from message inner join users using (userid) where 
ondate=date(sysdate());
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertmessage`(
in user_id_in int,
in subject_in varchar(400),
in text_in varchar(400),
in ondate_in varchar(20)
)
BEGIN
insert into reminder.message 
(userid,subject,text,ondate,dt) values 
(user_id_in,subject_in,text_in,ondate_in,sysdate());
END$$
DELIMITER ;
