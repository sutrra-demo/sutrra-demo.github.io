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

$field_owner_email = 'sutrra.shop@gmail.com';

$mail_to = $field_email;
$subject = 'sutrra_ | Potvrda porudžbine';

$body_message .= 'Tvoja porudžbina je potvrđena!'."\n"."\n";
$body_message .= 'Poručeni proizvodi se trenutno pakuju i biće isporučeni u roku od 2-4 radna dana putem Postexpress kuriske službe.'."\n";
$body_message .= 'Način plaćanja: pouzećem.'."\n"."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Ime: '.$field_firstname."\n";
$body_message .= 'Prezime: '.$field_lastname."\n";
$body_message .= 'Adresa: '.$field_address."\n";
$body_message .= 'Poštanski broj: '.$field_postal."\n";
$body_message .= 'Grad: '.$field_city."\n";
$body_message .= 'Telefon: '.$field_phone."\n";
$body_message .= 'Račun: '.$field_total.' rsd'."\n";
$body_message .= 'Proizvodi: '.$field_items."\n"."\n";

$body_message .= 'Troškovi poštarine nisu uračunati u cenu proizvoda i obračunavaju se prema cenovniku Postexpress kurirske službe.'."\n";
$body_message .= 'Ovo je automatsko obaveštenje. Molimo vas da ne odgovarate na ovaj e-mail.'."\n";


$headers = 'From: '.$field_owner_email."\r\n";
$headers .= 'Reply-To: '.$field_owner_email."\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

$mail_status_1 = mail($field_owner_email, $subject, $body_message, $headers);
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