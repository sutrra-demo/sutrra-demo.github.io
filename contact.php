<?php
$field_firstname = $_POST['cf_fname'];
$field_lastname = $_POST['cf_lname'];
$field_email = $_POST['cf_email'];
$field_phone = $_POST['cf_phone'];
$field_address = $_POST['cf_address'];
$field_city = $_POST['cf_city'];
$field_postal = $_POST['cf_postal'];
$field_total = $_POST['cf_total'];
$field_items = $_POST['cf_items'];

$mail_to = 'srdjanov.konstantin@gmail.com';
$subject = 'Porudžbina '.$field_firstname.' '.$field_lastname;

$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Ime: '.$field_firstname."\n";
$body_message .= 'Prezime: '.$field_lastname."\n";
$body_message .= 'Adresa: '.$field_address."\n";
$body_message .= 'Poštanski broj: '.$field_postal."\n";
$body_message .= 'Grad: '.$field_city."\n";
$body_message .= 'Telefon: '.$field_phone."\n";
$body_message .= 'Račun: '.$field_total."\n";
$body_message .= 'Proizvodi: '.$field_items."\n";


$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		window.location.href = 'https://sutrra.com/success';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		window.location.href = 'https://sutrra.com/error';
	</script>
<?php
}
?>