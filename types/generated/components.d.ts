import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceCardKartochkaUslugi extends Struct.ComponentSchema {
  collectionName: 'components_service_card_kartochka_uslugi';
  info: {
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
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service-card.kartochka-uslugi': ServiceCardKartochkaUslugi;
    }
  }
}
