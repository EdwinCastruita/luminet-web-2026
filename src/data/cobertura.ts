// Cobertura por estado. Fuente: datos de cobertura del proyecto xcien-web-page-2026.
export type CoberturaEstado = {
  name: string;
  municipalities: string[];
  localities?: string[];
};

export const coberturaEstados: Record<string, CoberturaEstado> = {
    "MXCHH": { name: "Chihuahua", municipalities: ["Chihuahua"] },
    "MXCMX": { name: "Ciudad de México", municipalities: ["Ciudad de México"] },
    "MXCOA": { name: "Coahuila", municipalities: ["Acuña", "Agua Nueva", "Arteaga", "Barroteran", "Derramadero", "Morelos", "Muzquiz", "Nueva Rosita", "Piedras Negras", "Ramos Arizpe", "Sabinas", "Saltillo", "San Carlos", "San Juan de la Vaquería", "San Juan de Sabinas", "Torreon", "Villa Unión"] },
    "MXMEX": { name: "Estado de México", municipalities: ["Cuautitlán Izcalli", "Huehuetoca", "Jaltenco", "Naucalpan", "Nextlalpan", "San Mateo Atenco", "Teoloyucan", "Tepotzotlan", "Tizayuca", "Tlalnepantla de Baz", "Toluca", "Xonacatlan", "Zumpango"] },
    "MXGUA": { name: "Guanajuato", municipalities: ["Celaya", "Irapuato", "León", "Silao"] },
    "MXJAL": { name: "Jalisco", municipalities: ["Acatlan de Juarez", "El Salto", "Guadalajara", "San Pedro Tlaquepaque", "Tonala", "Zapopan"] },
    "MXNLE": { name: "Nuevo León", municipalities: ["Agua Fría", "Allende", "Apodaca", "Cadereyta", "China", "Cienega de Flores", "El Carmen", "El Cercado", "Escobedo", "Garcia", "Guadalupe", "Hidalgo", "Hualahuises", "Juarez", "Linares", "Los Ramones", "Marin", "Montemorelos", "Monterrey", "Montesur", "Pesquería", "Salinas Victoria", "San Nicolás de los Garza", "San Pedro Garza Garcia", "Santa Catarina", "Santiago", "Zuazua"] },
    "MXPUE": { name: "Puebla", municipalities: ["Cuautlancingo", "Puebla"] },
    "MXQUE": { name: "Querétaro", municipalities: ["Corregidora", "El Marques", "Pedro de Escobedo", "Querétaro", "San Juan del Rio"] },
    "MXSLP": { name: "San Luis Potosí", municipalities: ["San Luis Potosí"] },
    "MXTAM": { name: "Tamaulipas", municipalities: ["Altamira", "Ciudad Madero", "Nuevo Laredo", "Reynosa", "Rio Bravo", "Tampico"] },
    "MXYUC": { 
      name: "Yucatán", 
      municipalities: ["Conkal", "Mérida", "Progreso", "Telchac"],
      localities: ["Caucel", "Chablekal", "Chelem", "Cholul", "Chuburná", "Komchem", "Oncan", "Sacapuc", "Sierra Papacal", "Tamanché", "Telchac", "Timul", "Uaymitun"]
    }
  };
