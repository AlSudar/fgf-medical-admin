import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banner';
  info: {
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440';
  };
  attributes: {
    buttonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CardLinkKartochkaSSsylkoj extends Struct.ComponentSchema {
  collectionName: 'components_card_link_kartochka_s_ssylkoj';
  info: {
    description: '';
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441 \u0441\u0441\u044B\u043B\u043A\u043E\u0439';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CategoryServiceKategoriyaUslugi
  extends Struct.ComponentSchema {
  collectionName: 'components_category_service_kategoriya_uslugi';
  info: {
    displayName: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438';
  };
  attributes: {
    categoryLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    imageSrc: Schema.Attribute.String & Schema.Attribute.Required;
    imageTabletSrc: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface PriceListStoimost extends Struct.ComponentSchema {
  collectionName: 'components_price_list_stoimost';
  info: {
    displayName: '\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResultCardRezultat extends Struct.ComponentSchema {
  collectionName: 'components_result_card_rezultat';
  info: {
    description: '';
    displayName: '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imageSrc: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SpecialistSpeczialist extends Struct.ComponentSchema {
  collectionName: 'components_specialist_speczialist';
  info: {
    description: '';
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
    results: Schema.Attribute.Component<'result-card.rezultat', true>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::uslugi.uslugi'>;
    speciality: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner': BannerBanner;
      'card-link.kartochka-s-ssylkoj': CardLinkKartochkaSSsylkoj;
      'category-service.kategoriya-uslugi': CategoryServiceKategoriyaUslugi;
      'price-list.stoimost': PriceListStoimost;
      'result-card.rezultat': ResultCardRezultat;
      'specialist.speczialist': SpecialistSpeczialist;
    }
  }
}
