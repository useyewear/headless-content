import type { Schema, Struct } from '@strapi/strapi';

export interface ConfigurationLayout extends Struct.ComponentSchema {
  collectionName: 'components_configuration_layouts';
  info: {
    displayName: 'layout';
  };
  attributes: {
    hideGallery: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hidePrice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hideRxHero: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hideSpecs: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hideVariantSelection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsDescription extends Struct.ComponentSchema {
  collectionName: 'components_sections_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    defaultExpanded: Schema.Attribute.Boolean;
    source: Schema.Attribute.Enumeration<
      ['product', 'cms', 'cmsWithProductFallback']
    > &
      Schema.Attribute.DefaultTo<'product'>;
  };
}

export interface SectionsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text;
    heightPx: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 900;
          min: 120;
        },
        number
      > &
      Schema.Attribute.DefaultTo<380>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageUrl: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'shared.links', true>;
    mobileHeightPx: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 900;
          min: 120;
        },
        number
      > &
      Schema.Attribute.DefaultTo<350>;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileImageUrl: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    source: Schema.Attribute.Enumeration<
      ['product', 'cms', 'cmsWithProductFallback']
    >;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['openLenses', 'anchor', 'url']> &
      Schema.Attribute.DefaultTo<'anchor'>;
    href: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'configuration.layout': ConfigurationLayout;
      'sections.description': SectionsDescription;
      'sections.hero-banner': SectionsHeroBanner;
      'shared.gallery': SharedGallery;
      'shared.links': SharedLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
