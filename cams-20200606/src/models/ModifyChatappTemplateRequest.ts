// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateRequestComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * The package name of the application invoked by WhatsApp. This parameter is valid for WhatsApp templates where Category is Authentication and Button Type is ONE_TAP or ZERO_TAP.
   * 
   * @example
   * com.aliyun.pack.***
   */
  packageName?: string;
  /**
   * @remarks
   * The signature hash value of the application invoked by WhatsApp. This parameter is valid for WhatsApp templates where Category is Authentication and Button Type is ONE_TAP or ZERO_TAP.
   * 
   * @example
   * kdikie9398k
   */
  signatureHash?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      signatureHash: 'SignatureHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      signatureHash: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The button text for the WhatsApp autofill operation. This parameter is required for WhatsApp templates where Category is Authentication and Button Type is ONE_TAP.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 23838jdjdj
   */
  couponCode?: string;
  /**
   * @remarks
   * The flow data event type. Valid values: NAVIGATE and DATA_EXCHANGE.
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * Flow id
   * 
   * @example
   * 293882
   */
  flowId?: string;
  /**
   * @remarks
   * Specifies whether the button is a marketing opt-out button. If a customer clicks this button and send control operations are configured on the Chat App Message Service platform, subsequent marketing messages are not sent to the customer. This parameter is valid only for WhatsApp templates where Category is Marketing and Button Type is QUICK_REPLY.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The navigation screen. This parameter is required when FlowAction is NAVIGATE.
   * 
   * @example
   * SIGN_UP
   */
  navigateScreen?: string;
  /**
   * @remarks
   * The package name of the application invoked by WhatsApp. This parameter is valid for WhatsApp templates where Category is Authentication and Button Type is ONE_TAP or ZERO_TAP.
   * 
   * @example
   * com.aliyun.pack.***
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800**
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The signature hash value of the application invoked by WhatsApp. This parameter is valid for WhatsApp templates where Category is Authentication and Button Type is ONE_TAP or ZERO_TAP.
   * 
   * @example
   * kdikie9398k
   */
  signatureHash?: string;
  /**
   * @remarks
   * The applications supported by the ONE_TAP or ZERO_TAP verification code.
   */
  supportedApps?: ModifyChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The text of the message to be sent.
   * 
   * @example
   * CTA
   */
  text?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 10800
   */
  ttlMinutes?: number;
  /**
   * @remarks
   * The button type. Valid values: PHONE_NUMBER, URL, and QUICK_REPLY.
   * 
   * This parameter is required.
   * 
   * @example
   * URL
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when the button is clicked.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values: static and dynamic.
   * 
   * @example
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      flowAction: 'FlowAction',
      flowId: 'FlowId',
      isOptOut: 'IsOptOut',
      navigateScreen: 'NavigateScreen',
      packageName: 'PackageName',
      phoneNumber: 'PhoneNumber',
      signatureHash: 'SignatureHash',
      supportedApps: 'SupportedApps',
      text: 'Text',
      ttlMinutes: 'TtlMinutes',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autofillText: 'string',
      couponCode: 'string',
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtonsSupportedApps },
      text: 'string',
      ttlMinutes: 'number',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedApps)) {
      $dara.Model.validateArray(this.supportedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800**
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The button text.
   * 
   * @example
   * text
   */
  text?: string;
  /**
   * @remarks
   * The button type of the carousel template. Valid values: URL, PHONE_NUMBER, and QUICK_REQLY.
   * 
   * This parameter is required.
   * 
   * @example
   * URL
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when the button is clicked.
   * 
   * @example
   * https://aliyun.com/image.png
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values: static and dynamic.
   * 
   * @example
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      text: 'Text',
      type: 'Type',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsCardsCardComponents extends $dara.Model {
  /**
   * @remarks
   * The buttons in the carousel card. The button type, name, and order must be consistent across all cards. Each card can have a maximum of two buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The header type in the carousel template. Only IMAGE and VIDEO are supported. The header must be consistent across all cards. Valid values: IMGAGE and VIDEO.
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The body content in the carousel card.
   * 
   * @example
   * body
   */
  text?: string;
  /**
   * @remarks
   * The component type. Valid values: BODY, HEADER, and BUTTONS.
   * 
   * This parameter is required.
   * 
   * @example
   * HEADER
   */
  type?: string;
  /**
   * @remarks
   * The URL of the image or video in the header.
   * 
   * @example
   * https://aliyun.com/image.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buttons: 'Buttons',
      format: 'Format',
      text: 'Text',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons },
      format: 'string',
      text: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buttons)) {
      $dara.Model.validateArray(this.buttons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The list of components in the carousel card.
   * 
   * This parameter is required.
   */
  cardComponents?: ModifyChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCardsCardComponents },
    };
  }

  validate() {
    if(Array.isArray(this.cardComponents)) {
      $dara.Model.validateArray(this.cardComponents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The prompt displayed above the body that advises users not to share the verification code with others. This parameter is valid only for WhatsApp templates where Category is Authentication and Component Type is Body.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The list of buttons. This parameter applies only to **BUTTONS** components.
   * 
   * > WhatsApp button limits
   * > - For MARKETING or UTILITY templates, a maximum of 10 buttons are allowed.
   * > - Only one PHONE_NUMBER button is allowed.
   * > - A maximum of two URL buttons are allowed.
   * > - QUICK_REPLY buttons must not be mixed with PHONE_NUMBER or URL buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description. You can add a description when Type is Header and Format is IMGAGE, DOCUMENT, or VIDEO.
   * 
   * @example
   * test
   */
  caption?: string;
  /**
   * @remarks
   * The list of carousel template cards.
   */
  cards?: ModifyChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in minutes for WhatsApp authentication templates. This parameter is valid only for WhatsApp messages where Category is Authentication and Component Type is Footer. This information is displayed in the footer.
   * 
   * @example
   * 10
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The duration of the Viber video message. Valid values: 0 to 600.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The file name. You can specify a file name when Type is Header and Format is DOCUMENT.
   * 
   * @example
   * txt.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The file type of the Viber file message.
   * 
   * @example
   * txt
   */
  fileType?: string;
  /**
   * @remarks
   * The format. Valid values:
   * - TEXT: Text.
   * - IMGAGE: Image.
   * - DOCUMENT: Document.
   * - VIDEO: Video.
   * 
   * @example
   * body
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether the LTO template has an expiration time.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message to be sent.
   * 
   * @example
   * IMAGE
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL for a Viber video message.
   * 
   * @example
   * https://img.png
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type. Valid values: BODY, HEADER, FOOTER, and BUTTONS.
   * 
   * This parameter is required.
   * 
   * @example
   * HEADER
   */
  type?: string;
  /**
   * @remarks
   * The media URL.
   * 
   * @example
   * https://img.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addSecretRecommendation: 'AddSecretRecommendation',
      buttons: 'Buttons',
      caption: 'Caption',
      cards: 'Cards',
      codeExpirationMinutes: 'CodeExpirationMinutes',
      duration: 'Duration',
      fileName: 'FileName',
      fileType: 'FileType',
      format: 'Format',
      hasExpiration: 'HasExpiration',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      hasExpiration: 'boolean',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buttons)) {
      $dara.Model.validateArray(this.buttons);
    }
    if(Array.isArray(this.cards)) {
      $dara.Model.validateArray(this.cards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyChatappTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template category for Viber templates. This parameter is invalid for WhatsApp templates.
   * 
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to pause sending the template when its category is changed from Utility to Marketing.
   * 
   * @example
   * true
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is AUTHENTICATION, Components cannot contain nodes with Type set to HEADER. When Type is BODY or FOOTER, if Text is empty, the content is automatically generated.
   * 
   * This parameter is required.
   */
  components?: ModifyChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * cams-did***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WABA ID of the ISV customer. This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 939***
   */
  custWabaId?: string;
  /**
   * @remarks
   * The variables in a key-value structure.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * 9393***
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The validity period for sending WhatsApp authentication template messages.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * productSetId
   * 
   * @example
   * 939***
   */
  productSetId?: string;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 93938**
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype to modify. Valid values: WHATSAPP and VIBER. Default value: WHATSAPP.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      components: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      productSetId: 'ProductSetId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryChangePaused: 'boolean',
      components: { 'type': 'array', 'itemType': ModifyChatappTemplateRequestComponents },
      custSpaceId: 'string',
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      productSetId: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.example) {
      $dara.Model.validateMap(this.example);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

