// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateRequestComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * Required for WhatsApp templates when Category is AUTHENTICATION and Button Type is ONE_TAP or ZERO_TAP. This is the package name of the application launched by WhatsApp.
   * 
   * @example
   * com.example.myapplication
   */
  packageName?: string;
  /**
   * @remarks
   * Required for WhatsApp templates when Category is AUTHENTICATION and Button Type is ONE_TAP or ZERO_TAP. This is the signature hash of the application launched by WhatsApp.
   * 
   * @example
   * fk39kd93ks9
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
   * Required for WhatsApp templates when Category is AUTHENTICATION and Button Type is ONE_TAP or ZERO_TAP. This is the button text for the WhatsApp Autofill action.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code. It supports only letters and numbers. You can pass a variable, such as \\`$(couponCode)\\`, and provide the actual coupon code at the time of sending.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The Flow data event type. Valid values:
   * 
   * - DATA_EXCHANGE: Data exchange.
   * 
   * - NAVIGATE: Navigation.
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * 664597077870605
   */
  flowId?: string;
  /**
   * @remarks
   * For WhatsApp templates, this is valid when Category is Marketing and Button type is QUICK_REPLY. It indicates that the button is a marketing opt-out button. If a customer clicks this button and a sending control action is configured in ChatApp, subsequent marketing messages are not sent to the customer.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The screen to navigate to. This is required when FlowAction is NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * Use the properties under SupportedApps.
   * 
   * @example
   * com.demo
   * 
   * @deprecated
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +861388888****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Use the properties under SupportedApps.
   * 
   * @example
   * 29dkeke
   * 
   * @deprecated
   */
  signatureHash?: string;
  /**
   * @remarks
   * A list of supported apps.
   */
  supportedApps?: ModifyChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The button text.
   * 
   * @example
   * phone-button-text
   */
  text?: string;
  /**
   * @remarks
   * The button type.
   * 
   * - **PHONE_NUMBER**: Call button
   * 
   * - **URL**: URL button
   * 
   * - **QUICK_REPLY**: Quick reply button
   * 
   * - **COPY_CODE**: Copy verification code or coupon code
   * 
   * - **ONE_TAP**: Backfill button for AUTHENTICATION templates
   * 
   * - **ZERO_TAP**: Backfill button for AUTHENTICATION templates
   * 
   * - **MPM**: Multi-product message
   * 
   * - **CATALOG**: Catalog
   * 
   * - **FLOW**: Open WhatsApp flow
   * 
   * > * For WhatsApp templates where Category is AUTHENTICATION, only one button is allowed, and its type must be COPY_CODE or ONE_TAP. If the type is COPY_CODE, Text is required. If the type is ONE_TAP, the Text (the name of the copy code button, displayed when the target application is not installed), SignatureHash, PackageName, and AutofillText properties are required.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to visit when the button is clicked.
   * 
   * @example
   * https://www.website.com/***
   */
  url?: string;
  /**
   * @remarks
   * The URL type.
   * 
   * - **static**
   * 
   * - **dynamic**
   * 
   * @example
   * dynamic
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
   * +861368893****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The button text.
   * 
   * @example
   * Call me
   */
  text?: string;
  /**
   * @remarks
   * The button type.
   * 
   * - **PHONE_NUMBER**: Call button
   * 
   * - **URL**: URL button
   * 
   * - **QUICK_REPLY**: Quick reply button
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to visit when the button is clicked.
   * 
   * @example
   * https://alibaba.com/xx
   */
  url?: string;
  /**
   * @remarks
   * The URL type.
   * 
   * - **static**
   * 
   * - **dynamic**
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
   * A list of buttons. This applies only to the BUTTONS component. Each Carousel card can have a maximum of two buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The media resource type. This is valid when Type is HEADER.
   * 
   * - **IMAGE**
   * 
   * - **VIDEO**
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The content of the BODY in the Carousel card.
   * 
   * @example
   * Who is the very powerful team
   */
  text?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * - **BODY**
   * 
   * - **HEADER**
   * 
   * - **BUTTONS**
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media asset.
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
   * A list of controls in the Carousel card.
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
   * For WhatsApp templates, this is valid when Category is AUTHENTICATION and Component Type is Body. It indicates that a message is displayed above the body, advising users not to share the verification code.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * A list of buttons. This applies only to the `BUTTONS` component.
   * 
   * > Number of buttons for WhatsApp:
   * >
   * > - For MARKETING or UTILITY templates, WhatsApp allows a maximum of 10 buttons.
   * >
   * > - Only one button of the PHONE_NUMBER type is allowed.
   * >
   * > - A maximum of two buttons of the URL type are allowed.
   * >
   * > - QUICK_REPLY buttons cannot be mixed with PHONE_NUMBER or URL buttons.
   */
  buttons?: ModifyChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description.
   * 
   * > You can add a description when Type is HEADER and Format is IMAGE, `DOCUMENT`, or `VIDEO`.
   * 
   * @example
   * This is a video
   */
  caption?: string;
  /**
   * @remarks
   * A list of cards for the Carousel template.
   */
  cards?: ModifyChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code for a WhatsApp AUTHENTICATION template, in minutes. This is valid only for WhatsApp messages when Category is AUTHENTICATION and Component Type is Footer. This information is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * This field is invalid.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The file name.
   * 
   * > Specify the file name when Type is HEADER and `Format` is `DOCUMENT`.
   * 
   * @example
   * video
   */
  fileName?: string;
  /**
   * @remarks
   * This field is invalid.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The media resource type.
   * 
   * - **TEXT**: Text
   * 
   * - **IMAGE**: Image
   * 
   * - **DOCUMENT**: Document
   * 
   * - **VIDEO**: Video
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Indicates whether the coupon code has an expiration time. Used when type is LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message.
   * 
   * > If Category is AUTHENTICATION, this property is empty.
   * 
   * @example
   * hello chatapp
   */
  text?: string;
  /**
   * @remarks
   * This field is invalid.
   * 
   * @example
   * https://cdn.multiplymall.mobiapp.cloud/cloudcode/yc-165407506207478-165511576113195/20220905/ec5b9737-1507-4208-bb27-8da3958da961.jpg?x-oss-process=image/resize,w_100
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type:
   * 
   * - **BODY**
   * 
   * - **HEADER**
   * 
   * - **FOOTER**
   * 
   * - **BUTTONS**
   * 
   * - **CAROUSEL**
   * 
   * - **LIMITED_TIME_OFFER**
   * 
   * > * For WhatsApp templates, the `BODY` component cannot exceed 1,024 characters. The `HEADER` and `FOOTER` components cannot exceed 60 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media asset.
   * 
   * @example
   * https://img.****.com/png_preview/00/10/24/1GygxVK3F4.jpg
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
   * The templatetype is immutable.
   * 
   * @example
   * text
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * A list of message template components.
   * 
   * > When Category is AUTHENTICATION, Components cannot contain a node with Type set to HEADER. If Type is BODY or FOOTER, the Text content is empty and is automatically generated.
   * 
   * This parameter is required.
   */
  components?: ModifyChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The Space ID of the ISV sub-customer, or the instance ID of a direct customer.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the independent software vendor (ISV) customer.
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The template example.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The ISV verification code. This code is used to verify that the RAM user is authorized by the ISV.
   * 
   * @example
   * ksiekdki39ksks93939
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For a list of language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the template message in seconds.
   * 
   * - For AUTHENTICATION templates, the value ranges from 30 to 900.
   * 
   * - For UTILITY templates, the value ranges from 30 to 43,200.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The message template code.
   * 
   * @example
   * 8472929283883
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
   * The template type.
   * 
   * - **WHATSAPP**
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

