// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappTemplateRequestComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * This parameter is required for WhatsApp templates when Category is set to AUTHENTICATION and the button type is ONE_TAP or ZERO_TAP. It specifies the package name of the app that WhatsApp will launch.
   * 
   * @example
   * com.kuaidian.waimaistaff
   */
  packageName?: string;
  /**
   * @remarks
   * This parameter is required for WhatsApp templates when Category is set to AUTHENTICATION and the button type is ONE_TAP or ZERO_TAP. It specifies the signature hash of the app that WhatsApp will launch.
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
   * This parameter is required for WhatsApp templates when Category is set to AUTHENTICATION and the button type is ONE_TAP or ZERO_TAP. It specifies the button text for the WhatsApp autofill action.
   * 
   * @example
   * Autofill
   */
  autofillText?: string;
  /**
   * @remarks
   * The value of the coupon code. It supports only letters and digits. You can pass a variable such as $(couponCode) and then pass the actual coupon code when sending the message.
   * 
   * @example
   * 120293
   */
  couponCode?: string;
  /**
   * @remarks
   * The flow data event type. Valid values:
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
   * The flow ID.
   * 
   * @example
   * 479884093605****
   */
  flowId?: string;
  /**
   * @remarks
   * This parameter is valid for WhatsApp templates when Category is set to Marketing and the button type is QUICK_REPLY. It indicates that the button is a marketing opt-out button. If a customer clicks this button and you have configured sending control operations in ChatApp, subsequent marketing messages will not be sent to the customer.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The screen to navigate to. This parameter is required when FlowAction is set to NAVIGATE.
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
   * 
   * @deprecated
   */
  signatureHash?: string;
  /**
   * @remarks
   * The list of supported apps.
   */
  supportedApps?: CreateChatappTemplateRequestComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The name displayed on the button.
   * 
   * @example
   * Call Me
   */
  text?: string;
  /**
   * @remarks
   * The button type.
   * 
   * - **PHONE_NUMBER**: A call button.
   * 
   * - **URL**: A URL button.
   * 
   * - **QUICK_REPLY**: A quick reply button.
   * 
   * - **COPY_CODE**: A button to copy a verification code or coupon code.
   * 
   * - **ONE_TAP**: An autofill button for AUTHENTICATION templates.
   * 
   * - **ZERO_TAP**: An autofill button for AUTHENTICATION templates.
   * 
   * - **MPM**: A multi-product message.
   * 
   * - **CATALOG**: A catalog.
   * 
   * - **FLOW**: Opens a WhatsApp flow.
   * 
   * > * For WhatsApp templates, if Category is set to AUTHENTICATION, only one button is allowed. The button type must be COPY_CODE or ONE_TAP. If you set the button type to COPY_CODE, the Text parameter is required. If you set the button type to ONE_TAP, the Text (the name of the copy code button displayed on the client if the destination app is not installed), SignatureHash, PackageName, and AutofillText parameters are required.
   * >
   * > * For Viber templates, only one button is allowed, and it must be of the URL type.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL that is visited when the URL button is clicked.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type.
   * 
   * - **static**: Static
   * 
   * - **dynamic**: Dynamic
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
   * The button type.
   * 
   * - **PHONE_NUMBER**: A call button.
   * 
   * - **URL**: A URL button.
   * 
   * - **QUICK_REPLY**: A quick reply button.
   * 
   * This parameter is required.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL that is visited when the button is clicked.
   * 
   * @example
   * https://alibaba.com/xx
   */
  url?: string;
  /**
   * @remarks
   * The URL type.
   * 
   * - **static**: Static
   * 
   * - **dynamic**: Dynamic
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
   * The list of buttons. This parameter applies only to the BUTTONS component. Each card in a carousel can have a maximum of two buttons.
   */
  buttons?: CreateChatappTemplateRequestComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The type of the media resource. This parameter is valid when Type is set to HEADER.
   * 
   * - **IMAGE**: image
   * 
   * - **VIDEO**: video
   * 
   * @example
   * IMAGE
   */
  format?: string;
  /**
   * @remarks
   * The content of the BODY component in the carousel card.
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
   * The path of the media resource.
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
   * 
   * This parameter is required.
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
   * This parameter is valid for WhatsApp templates when Category is set to AUTHENTICATION and the component type is Body. It indicates that a security recommendation is displayed above the body, advising the user not to share the verification code.
   * 
   * @example
   * true
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The list of buttons. This parameter applies only to the **BUTTONS** component.
   * 
   * > Number of buttons for WhatsApp
   * >
   * > - For MARKETING or UTILITY templates, you can add up to 10 buttons.
   * >
   * > - You can add only one button of the PHONE_NUMBER type.
   * >
   * > - You can add up to two buttons of the URL type.
   * >
   * > - Buttons of the QUICK_REPLY type cannot be mixed with buttons of the PHONE_NUMBER or URL type.
   * 
   * > Number of buttons for Viber
   * >
   * > - Only one button of the URL type is allowed.
   * >
   * > - If the HEADER component contains a video, the button type is URL, but you cannot set a URL.
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
   * The list of cards for a carousel template.
   */
  cards?: CreateChatappTemplateRequestComponentsCards[];
  /**
   * @remarks
   * The validity period of the verification code for a WhatsApp AUTHENTICATION template, in minutes. This parameter is valid only for WhatsApp messages when Category is set to AUTHENTICATION and the component type is Footer. This information is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The duration of the video in a Viber video message, in seconds. The value ranges from 0 to 600.
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
   * The file type of a Viber file message.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The type of the media resource.
   * 
   * - **TEXT**: text
   * 
   * - **IMAGE**: image
   * 
   * - **DOCUMENT**: document
   * 
   * - **VIDEO**: video
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * Indicates whether the coupon code has an expiration time. This parameter is used when type is set to LIMITED_TIME_OFFER.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
  /**
   * @remarks
   * The text of the message to send.
   * 
   * > For WhatsApp templates, if Category is set to AUTHENTICATION, this parameter is empty.
   * 
   * @example
   * hello whatsapp
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail of a Viber message that contains a video.
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
   * > * For WhatsApp templates, the BODY component can contain up to 1,024 characters. The HEADER and FOOTER components can contain up to 60 characters.
   * >
   * > * For Viber templates, the FOOTER, CAROUSEL, and LIMITED_TIME_OFFER types are invalid.
   * >
   * > * For Viber templates, images, videos, and files are placed in the HEADER component. The client displays the image below the text. The text is placed in the BODY component.
   * 
   * This parameter is required.
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The path of the media resource.
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
   * Indicates whether to allow Facebook to automatically change the category of the template. This can increase the approval rate of the template. This parameter is valid only when TemplateType is set to WHATSAPP.
   * >Notice: This property is deprecated. WhatsApp no longer supports this property.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  allowCategoryChange?: boolean;
  /**
   * @remarks
   * WhatsApp template categories:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * Viber template categories:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   * 
   * > When Category is set to AUTHENTICATION, the Components array cannot contain a component of the HEADER type. If the component type is BODY or FOOTER, the Text parameter must be empty.
   * 
   * This parameter is required.
   */
  components?: CreateChatappTemplateRequestComponents[];
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 293483938849493
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
   * An example of how to create a template.
   * 
   * @example
   * hello_whatsapp
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The ISV verification code, used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the template message in WhatsApp.
   * 
   * - For AUTHENTICATION templates, the value ranges from 30 to 900.
   * 
   * - For UTILITY templates, the value ranges from 30 to 43200.
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
   * The template type.
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

