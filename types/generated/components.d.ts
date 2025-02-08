import type { Schema, Struct } from '@strapi/strapi';

export interface ResultCardRezultat extends Struct.ComponentSchema {
  collectionName: 'components_result_card_rezultat';
  info: {
    displayName: '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ServiceCardKartochkaUslugi extends Struct.ComponentSchema {
  collectionName: 'components_service_card_kartochka_uslugi';
  info: {
    description: '';
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0443\u0441\u043B\u0443\u0433\u0438';
    icon: 'doctor';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SpecialistSpeczialist extends Struct.ComponentSchema {
  collectionName: 'components_specialist_speczialist';
  info: {
    displayName: '\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442';
    icon: 'emotionHappy';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    experience: Schema.Attribute.String;
    imgSrc: Schema.Attribute.String;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text;
    speciality: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'result-card.rezultat': ResultCardRezultat;
      'service-card.kartochka-uslugi': ServiceCardKartochkaUslugi;
      'specialist.speczialist': SpecialistSpeczialist;
    }
  }
}
