export const usersSchema={
    id:"user_id",
    name:"user_first_name",
    lastName:"user_last_name",
    phone:"user_phone_number",
    mail:"user_mail_adress",
    type:"user_type",
    password:"user_pass_word",
    userImage:"user_image",
    date:"system_date",
    time:"system_time"
}
export const etablishementSchema={
    name:"etablishement_name",
    mail:"etablishement_mail",
    phone:"etablishement_phone_number",
    webSite:"etablishement_web_site",
    logo:"etablishement_logo",
    bp:"etablishement_bp",
    adress:"etablishment_adress",
    date:"system_date",
    time:"system_time"
}
export const providersSchema={
    id:"provider_id",
    name:"provider_name",
    adress:"provider_adress",
    phone:"provider_phone_number",
    mail:"provider_mail_adress",
    date:"system_date",
    time:"system_time",
    userId:"user_id" 
}
export const clientsSchema={
    id:"client_id",
    name:"client_name",
    adress:"client_adress",
    phone:"client_phone_number",
    mail:"client_mail_adress",
    date:"system_date",
    time:"system_time",
    userId:"user_id"   
}
export const exercisesSchema={
    id:"exercise_id",
    startDate:"exercise_start_date",
    endDate:"exercise_end_date",
    status:"exercise_status",
    date:"system_date",
    time:"system_time",
    userId:"user_id" 
}
export const categoriesSchema={
    id:"categorie_id",
    name:"categorie_name",
    type:"categorie_type",
    date:"system_date",
    time:"system_time",
    userId:"user_id" 
}
export const subCategoriesSchema = {
    id:"sub_categorie_id",
    categorieId:"categorie_id",
    name:"sub_categorie_name",
    type:"sub_categorie_type",
    date:"system_date",
    time:"system_time",
    userId:"user_id"
}
export const marksSchema={
    id:"mark_id",
    name:"mark_name",
    description:"mark_description",
    date:"system_date",
    time:"system_time",
    userId:"user_id",
    subCategorieId:"sub_categorie_id" 
}
export const productsSchema={
    id:"product_id",
    
    name:"product_name",
    markId:"mark_id",
    dosage:"product_dosage",
    forme:"product_forme",
    format:"product_format",
    alertStock:"product_alert_stock",
    date:"system_date",
    time:"system_time",
    userId:"user_id" 
}
export const inputSchema={
    id:"input_traffic_id",
    productId:"product_id",
    providerId:"provider_id",
    quantity:"quantity",
    unitePrice:"unite_price",
    lot:"lot_number",
    expireDate:"expire_date",
    exerciseId:"exercise_id",
    dateRecord:"date_record",
    timeRecord:"time_record",
    comment:"comment_traffic",
    date:"system_date",
    time:"system_time",    
    userId:"user_id"
}
export const bookingsReferencesSchema={
    id:"booking_reference_id",
    number:"booking_reference_number",
    date:"date_record",
    time:"time_record",
    statusPayement:"status_payement",
    statOutput:"status_output",
    userId:"user_id",
    exerciseId:"exercise_id",
}
export const bookingsSchema={
    id:"booking_id",
    reference:"booking_reference_id",
    clientId:"client_id",
    productId:"product_id",
    quantity:"quantity",
    unitePrice:"unite_price",
    description:"booking_description",
    exerciseId:"exercise_id",
    dateRecord:"date_record",
    timeRecord:"time_record",
    date:"system_date",
    time:"system_time",    
    userId:"user_id"
}
export const outputSchema={
    id:"out_traffic_id",
    bookingId:"booking_id",
    reference:"booking_reference_id",
    outputNumber:"output_number",
    quantity:"quantity",
    unitePrice:"unite_price",   
    exerciseId:"exercise_id",
    dateRecord:"date_record",
    timeRecord:"time_record",
    date:"system_date",
    time:"system_time",
    perisable:"product_id_input_perisable",
    envoy:"envoy",    
    userId:"user_id",
    productId:"product_id"
}
export const payementsSchema={
    id:"payement_id",
    referenceId:"booking_reference_id",
    dateRecord:"date_record",
    timeRecord:"time_record",
    mount:"payement_mount",
    envoy:"payement_envoy",
    exerciseId:"exercise_id",
    userId:"user_id",
    date:"system_date",
    time:"system_time",
    receiptNumber:"receipt_number"
}
export const databaseSchema={
    users:"users",
    etablishement:"etablishement",
    providers:"providers",
    clients:"clients",
    exercises:"exercises",
    categories:"categories",
    products:"products",
    input:"input_traffic",
    bookings:"bookings",
    output:"output_traffic",
    payement:"payement",
    marks:"marks",
    subCategories:"sub_categories",
    references:"bookings_references"

}
export const Schema={
    usersSchema,
    etablishementSchema,
    providersSchema,
    clientsSchema,
    exercisesSchema,
    categoriesSchema,
    productsSchema,
    inputSchema,
    bookingsSchema,
    outputSchema,
    payementsSchema,
    marksSchema,
    subCategoriesSchema,
    bookingsReferencesSchema,
    databaseSchema
}
export default Schema