class ProtocoloService {
    OPEN_RECEPCION = [
        "Agregar bolsas de basura negra en tachos de basura",
        "Limpiar muebles con trapo (usar silicona cada 15 días)",
        "Limpiar sillas y sacudir muebles",
        "Llenar dulces",
        "Prender tele, colocar Youtube y reproducir lista de promociones"   
    ]

    OPEN_HIDRO_1 = [
        "Llenar con agua fría hasta por encima del hidro, ambas tinas.",
        "Verificar cantidad de gas actual y repuesto",
        "Levantar cuchilla de gas de la terma",
        "Enchufar terma",
        "Acomodar pisos negros",
        "Agregar bolsas de basura negra en tachos de basura",
        "Limpiar sillas" 
    ]

    OPEN_HIDRO_VIP = [
        "Llenar con agua fría hasta por encima del hidro, ambas tinas.",
        "Verificar cantidad de gas actual y repuesto",
        "Levantar cuchilla de gas de la terma",
        "Enchufar terma",
        "Acomodar pisos negros",
        "Agregar bolsas de basura negra en tachos de basura",
        "Limpiar sillas" 
    ]

    OPEN_ESTIMULACION = [
        "Verificar batería de: Tablet, parlantes",
        "Limpiar pisos con Poet"
    ]

    START_HIDRO_1 = [
       	"Revisar temperatura",
       	"Llenar tina con agua caliente hasta 4 dedos debajo de la catarata (NO LLENAR CON AGUA CALIENTE LAS 2 AL MISMO TIEMPO)",
       	"Verificar abastecimiento de pañales en canastilla",
       	"Verificar cantidad de aceite corporal en recipiente",
       	"Verificar toallas",
       	"Verificar flotadores: 2 camas, 2 de plástico y 2 de cuello",
       	"Aplicar aromatizante ",
       	"Colocar música de hidroterapia",
       	"Buscar letras para nombre y número de meses",
        "Acomodar nombres y meses en espacio",
        "Verificar si es cumplemés y buscar decoración",
        "En caso d cumplemés, se debe preparar parlante con música, ingresar una persona antes con el parlante.",
        "Agregar decoración simple o de cumplemés de acuerdo al género al bebé.",
        "Colocar pelotas de colores acuerdo al género",
        "Verificar burbujar en torta de cumplemes",
        "Colocarse mandil",
        "No olvidar sonreír siempre"
    ]

    START_HIDRO_VIP = [
       	"Revisar temperatura",
       	"Llenar tina con agua caliente hasta 4 dedos debajo de la catarata (NO LLENAR CON AGUA CALIENTE LAS 2 AL MISMO TIEMPO)",
       	"Verificar abastecimiento de pañales en canastilla",
       	"Verificar cantidad de aceite corporal en recipiente",
       	"Verificar toallas",
       	"Verificar flotadores: 2 camas, 2 de plástico y 2 de cuello",
       	"Aplicar aromatizante ",
       	"Colocar música de hidroterapia",
       	"Buscar letras para nombre y número de meses",
        "Acomodar nombres y meses en espacio",
        "Verificar si es cumplemés y buscar decoración",
        "En caso d cumplemés, se debe preparar parlante con música, ingresar una persona antes con el parlante.",
        "Agregar decoración simple o de cumplemés de acuerdo al género al bebé.",
        "Colocar pelotas de colores acuerdo al género",
        "Verificar burbujar en torta de cumplemes",
        "Colocarse mandil",
        "No olvidar sonreír siempre"
    ]

    END_HIDRO_1 = [
     "Prender ventilador",
     "Aplicar aromatizante",
     "Abrir puerta",
     "Verificar limpieza de tina", 
     "En caso de estar sucia: Bajar agua, limpiar tina y llenar tinas con agua fría hasta debajo de los jets de hidro."
    ]

    END_HIDRO_VIP = [
     "Prender ventilador",
     "Aplicar aromatizante",
     "Abrir puerta",
     "Verificar limpieza de tina", 
     "En caso de estar sucia: Bajar agua, limpiar tina y llenar tinas con agua fría hasta debajo de los jets de hidro."
    ]

    START_ESTIMULACION = [
        "Buscar letras para nombre y número de meses",
        "Acomodar nombres y meses en espacio",
        "No olvidar sonreír siempre",
        "Verificar que no quede ningún residuo",
        "Limpiar rodillos, pelota de pilates",
        "Ordenar caja de objetos",
        "Verificar materiales guiándose de la historia clínica"
    ]

    END_ESTIMULACION = [
        "Limpiar piso de estimulación",
        "Verificar que no quede ningún residuo",
        "Limpiar rodillos, pelota de pilates",
        "Ordenar caja de objetos",
        "Llenar avance en historia clínica"
    ]
    
    CLOSE_RECEPCION = [
        "Botar la basura",
        "Apagar televisor",
        "Enviar fotos y videos tomados en el día al grupo de whatsapp",
        "Desenchufar todo de recepción",
        "Apagar luces de recepción"
    ]

    CLOSE_HIDRO_1 = [
        "Vaciar agua de los canastones",
        "Bajar agua de tinas",
        "Limpiar tinas",
        "Llenar tinas con agua fría hasta debajo de los jets de hidro. (en caso de haber hidro en la mañana del siguiente día)",
        "Quitar pisos negros y tender en el pasadizo",
        "Pasar el trapeador",
        "Bajar la cuchilla de hidro",
        "Bajar la cuchilla del gas",
        "Desenchufar terma",
        "Tender mandil y objetos mojados",
        "Alistar flotadores usados del día",
    ]

    CLOSE_HIDRO_VIP = [
        "Vaciar agua de los canastones",
        "Bajar agua de tinas",
        "Limpiar tinas",
        "Llenar tinas con agua fría hasta debajo de los jets de hidro. (en caso de haber hidro en la mañana del siguiente día)",
        "Quitar pisos negros y tender en el pasadizo",
        "Pasar el trapeador",
        "Bajar la cuchilla de hidro",
        "Bajar la cuchilla del gas",
        "Desenchufar terma",
        "Tender mandil y objetos mojados",
        "Alistar flotadores usados del día",
    ]

    CLOSE_ESTIMULACION = [
        "Acomodar y limpiar cuarto de estimulación"
    ]

    getProtocoloByCode(code) {
        return this[code];
    }
}

export default new ProtocoloService();