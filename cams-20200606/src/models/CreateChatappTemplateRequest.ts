// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappTemplateRequestComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * The package name of the app invoked by WhatsApp. This parameter is required for WhatsApp templates where Category is set to AUTHENTICATION and Button Type is set to ONE_TAP or ZERO_TAP.
   * 
   * @example
   * com.kuaidian.waimaistaff
   */
  packageName?: string;
  /**
   * @remarks
   * The signature hash value of the app invoked by WhatsApp. This parameter is required for WhatsApp templates where Category is set to AUTHENTICATION and Button Type is set to ONE_TAP or ZERO_TAP.
   * 
   * @example
   * ieid83kdiek
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

export class CreateChatappTemplateRequestComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The button text for the WhatsApp autofill operation. This parameter is required for WhatsApp templates where Category is set to AUTHENTICATION and Button Type is set to ONE_TAP or ZERO_TAP.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The coupon code value. Only letters and digits are supported. You can pass a variable such as $(couponCode) and specify the actual coupon code when sending the message.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The flow data event type. Valid values:
   * 
   * - DATA_EXCHANGE: data exchange.
   * 
   * - NAVIGATE: navigation.
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * 479884093605****
   */
  flowId?: string;
  /**
   * @remarks
   * Specifies whether the button is a marketing opt-out button. If a customer clicks this button and send control operations are configured on the Chat App Message Service platform, subsequent marketing messages will not be sent to the customer. This parameter is valid only for WhatsApp templates where Category is set to Marketing and Button Type is set to QUICK_REPLY.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The navigation screen. This parameter is required when FlowAction is set to NAVIGATE.
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
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. This parameter is valid only when the button type is **PHONE_NUMBER**.
   * 
   * @example
   * +861368897****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Use the properties under SupportedApps.
   * 
   * @example
   * wi299382
   */
  signatureHash?: string;
  /**
   * @remarks
   * The list of supported apps.
   */
  supportedApps?: CreateChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The display name of the button.
   * 
   * @example
   * Call Me
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
   * The button type. Valid values:
   * 
   * - **PHONE_NUMBER**: call button.
   * 
   * - **URL**: URL button.
   * 
   * - **QUICK_REPLY**: quick reply button.
   * 
   * - **COPY_CODE**: copy verification code or coupon code button.
   * 
   * - **ONE_TAP**: autofill button for AUTHENTICATION templates.
   * 
   * - **ZERO_TAP**: autofill button for AUTHENTICATION templates.
   * 
   * - **MPM**: multi-product message.
   * 
   * - **CATALOG**: catalog.
   * 
   * - **FLOW**: open WhatsApp flow.
   * 
   * > - For WhatsApp templates where Category is set to AUTHENTICATION, only one button is allowed, and its type must be COPY_CODE or ONE_TAP. If the type is COPY_CODE, Text is required. If the type is ONE_TAP, Text (displayed when the target app is not installed on the device, representing the name of the copy verification code button), SignatureHash, PackageName, and AutofillText are required.
   * > - For Viber templates, only one button is allowed, and its type must be URL.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when the link button is clicked.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * - **static**: static.
   * 
   * - **dynamic**: dynamic.
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
      supportedApps: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtonsSupportedApps },
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

export class CreateChatappTemplateRequestComponentsCardsCardComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +86138007****
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
   * The button type. Valid values:
   * 
   * - **PHONE_NUMBER**: call button.
   * 
   * - **URL**: URL button.
   * 
   * - **QUICK_REPLY**: quick reply button.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when the button is clicked.
   * 
   * @example
   * https://alibaba.com/xx
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values: 
   * 
   * - **static**: static.
   * 
   * - **dynamic**: dynamic.
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

export class CreateChatappTemplateRequestComponentsCardsCardComponents extends $dara.Model {
  /**
   * @remarks
   * The list of buttons. This parameter is only applicable to the BUTTONS component. Each carousel card can have a maximum of two buttons.
   */
  buttons?: CreateChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The media resource type. This parameter is valid when Type is set to HEADER. Valid values:
   * 
   * - **IMAGE**: image. 
   * 
   * - **VIDEO**: video.
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
   * The media URL.
   * 
   * @example
   * https://alibaba.com/img.png
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
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCardsCardComponentsButtons },
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

export class CreateChatappTemplateRequestComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The list of controls in the carousel card.
   */
  cardComponents?: CreateChatappTemplateRequestComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCardsCardComponents },
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

export class CreateChatappTemplateRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The security recommendation text displayed above the body to warn users not to share the verification code with others. This parameter is valid only for WhatsApp templates where Category is set to AUTHENTICATION and Component Type is set to BODY.
   * 
   * @example
   * true
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The list of buttons. This parameter is only applicable to the **BUTTONS** component.
   * 
   * > WhatsApp button limits:
   * > - For MARKETING or UTILITY templates, a maximum of 10 buttons are allowed.
   * > - Only one PHONE_NUMBER button is allowed.
   * > - A maximum of two URL buttons are allowed.
   * > - QUICK_REPLY buttons cannot be mixed with PHONE_NUMBER or URL buttons in an unordered manner.
   * 
   * > Viber button limits:
   * > - Only the URL type is supported, and only one button is allowed.
   * > - When the HEADER is a VIDEO, the button type must be URL, but the URL address cannot be set.
   */
  buttons?: CreateChatappTemplateRequestComponentsButtons[];
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * This is a video
   */
  caption?: string;
  /**
   * @remarks
   * The list of carousel template cards.
   */
  cards?: CreateChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code in minutes for WhatsApp AUTHENTICATION templates. This parameter is valid only for WhatsApp messages where Category is set to AUTHENTICATION and Component Type is set to FOOTER. This information is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The duration of the Viber video message in seconds. Valid values: 0 to 600.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * Express delivery video
   */
  fileName?: string;
  /**
   * @remarks
   * The file type of the Viber file message.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The media resource type. Valid values:
   * 
   * - **TEXT**: text.
   *  
   * - **IMAGE**: image.
   * 
   * - **DOCUMENT**: document.
   * 
   * - **VIDEO**: video.
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether the coupon code has an expiration time. This parameter is used when Type is set to LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message to send.
   * 
   * > For WhatsApp templates, when Category is set to AUTHENTICATION, this property is empty.
   * 
   * @example
   * hello whatsapp
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail for Viber video messages.
   * 
   * @example
   * https://cdn.multiplymall.mobiapp.cloud/yunmall/B-LM-LMALL202207130001/20220730/d712a057-a6af-4513-bbe6-7ee57ea60983.png?x-oss-process=image/resize,w_100
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type. Valid values:
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
   * > - For WhatsApp templates, the **BODY** component cannot exceed 1,024 characters in length. The **HEADER** and **FOOTER** components cannot exceed 60 characters in length.
   * > - For Viber templates, the **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** types are invalid.
   * > - In Viber templates, images, videos, and files are placed in the **HEADER** (the client displays the image below the text). Text is placed in the **BODY**.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The URL of the media.
   * 
   * > For Viber templates, the recommended image size is 800 × 800 pixels.
   * 
   * @example
   * https://image.developer.aliyundoc.com
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
      buttons: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponentsCards },
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

export class CreateChatappTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow Facebook to automatically change the category of the template to improve the approval rate. This property is valid only when TemplateType is set to WHATSAPP.
   * >Notice: **[Deprecated]** WhatsApp no longer supports this property.</notice>
   * 
   * @example
   * true
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * WhatsApp template categories:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing templates.
   * 
   * - **AUTHENTICATION**: Authenticate identity.
   * 
   * Viber template categories:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing templates.
   * 
   * - **AUTHENTICATION**: Authenticate identity.
   * 
   * This parameter is required.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to pause sending the template when a utility template is changed to a marketing template. This property is valid only for WhatsApp templates.
   * 
   * @example
   * false
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is set to AUTHENTICATION, Components cannot contain nodes with Type set to HEADER. Additionally, when Type is set to BODY or FOOTER, the Text content must be empty.
   * 
   * This parameter is required.
   */
  components?: CreateChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WabaId of the ISV customer.
   * 
   * > **[Deprecated]** Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The example for creating a template.
   * 
   * @example
   * hello_whatsapp
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The ISV verification code used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For detailed language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The validity period for sending template messages in WhatsApp.
   * - AUTHENTICATION: 30 to 900. 
   * - UTILITY: 30 to 43200.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  /**
   * @remarks
   * productSetId
   * 
   * @example
   * 9928**
   */
  productSetId?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - **WHATSAPP**
   * 
   * - **VIBER**
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCategoryChange: 'AllowCategoryChange',
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      components: 'Components',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      example: 'Example',
      isvCode: 'IsvCode',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      productSetId: 'ProductSetId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCategoryChange: 'boolean',
      category: 'string',
      categoryChangePaused: 'boolean',
      components: { 'type': 'array', 'itemType': CreateChatappTemplateRequestComponents },
      custSpaceId: 'string',
      custWabaId: 'string',
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvCode: 'string',
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      productSetId: 'string',
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

