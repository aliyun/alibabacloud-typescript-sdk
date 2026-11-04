// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs extends $dara.Model {
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * nextCard
   */
  action?: string;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * test
   */
  intentCode?: string;
  /**
   * @remarks
   * The language code of the next template.
   * 
   * @example
   * en
   */
  nextLanguageCode?: string;
  /**
   * @remarks
   * The code of the next template.
   * 
   * @example
   * 20939920093993
   */
  nextTemplateCode?: string;
  /**
   * @remarks
   * The name of the next template.
   * 
   * @example
   * abc
   */
  nextTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      intentCode: 'IntentCode',
      nextLanguageCode: 'NextLanguageCode',
      nextTemplateCode: 'NextTemplateCode',
      nextTemplateName: 'NextTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      intentCode: 'string',
      nextLanguageCode: 'string',
      nextTemplateCode: 'string',
      nextTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * com.test
   */
  packageName?: string;
  /**
   * @remarks
   * The package signature hash.
   * 
   * @example
   * 29kdkeik939
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

export class GetChatappTemplateDetailResponseBodyDataComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The button text for the WhatsApp autofill operation. This parameter is required for WhatsApp templates where the category is Authentication and the button type is ONE_TAP.
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
   * 202039ksjs
   */
  couponCode?: string;
  /**
   * @remarks
   * The extended attributes.
   */
  extendAttrs?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs;
  /**
   * @remarks
   * The flow data event type. Valid values:
   * 
   * - NAVIGATE: Navigation.
   * 
   * - DATA_EXCHANGE: Data exchange.
   * 
   * @example
   * NAVIGATE
   */
  flowAction?: string;
  /**
   * @remarks
   * Flow ID
   * 
   * @example
   * 3838292983
   */
  flowId?: string;
  /**
   * @remarks
   * Indicates whether the button is a marketing opt-out button. If a customer clicks this button and sending control is configured on the Chat App Message Service platform, subsequent marketing messages are not sent to the customer. This parameter is valid only for WhatsApp templates where the category is Marketing and the button type is QUICK_REPLY.
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
   * The package name of the application invoked by WhatsApp. This parameter is required for WhatsApp templates where the category is Authentication and the button type is ONE_TAP.
   * 
   * @example
   * com.aliyun
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. This parameter is valid only when the button type is **PHONE_NUMBER**.
   * 
   * @example
   * +861398745****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The signature hash value of the application invoked by WhatsApp. This parameter is required for WhatsApp templates where the category is Authentication and the button type is ONE_TAP.
   * 
   * @example
   * 2993839
   */
  signatureHash?: string;
  /**
   * @remarks
   * The applications supported by the ONE_TAP or ZERO_TAP verification code button.
   */
  supportedApps?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps[];
  /**
   * @remarks
   * The display name of the button.
   * 
   * @example
   * example
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
   * - **PHONE_NUMBER**: Call button.
   * 
   * - **URL**: URL button.
   * 
   * - **QUICK_REPLY**: Quick reply button.
   * 
   * - **COPY_CODE**: Copy verification code or coupon code button.
   * 
   * - **ONE_TAP**: Autofill button for authentication templates.
   * 
   * - **ZERO_TAP**: Autofill button for authentication templates.
   * 
   * - **MPM**: Multi-product message button.
   * 
   * - **CATALOG**: Catalog button.
   * 
   * - **FLOW**: WhatsApp flow button.
   * 
   * > - For WhatsApp templates where the category is AUTHENTICATION, only one button is allowed, and the type must be COPY_CODE or ONE_TAP. If the type is COPY_CODE, Text is required. If the type is ONE_TAP, Text (displayed when the target application is not installed on the device, representing the name of the copy verification code button), SignatureHash, PackageName, and AutofillText are required.
   * > - For Viber templates, only one button is allowed, and the type must be URL.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL to be accessed when the URL button is clicked.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   * 
   * - **static**: Static.
   * 
   * - **dynamic**: Dynamic.
   * 
   * @example
   * static
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      autofillText: 'AutofillText',
      couponCode: 'CouponCode',
      extendAttrs: 'ExtendAttrs',
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
      extendAttrs: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs,
      flowAction: 'string',
      flowId: 'string',
      isOptOut: 'boolean',
      navigateScreen: 'string',
      packageName: 'string',
      phoneNumber: 'string',
      signatureHash: 'string',
      supportedApps: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps },
      text: 'string',
      ttlMinutes: 'number',
      type: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    if(this.extendAttrs && typeof (this.extendAttrs as any).validate === 'function') {
      (this.extendAttrs as any).validate();
    }
    if(Array.isArray(this.supportedApps)) {
      $dara.Model.validateArray(this.supportedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +861380005****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The button content.
   * 
   * @example
   * example
   */
  text?: string;
  /**
   * @remarks
   * The button type for carousel templates. Valid values: URL, PHONE_NUMBER, and QUICK_REQLY.
   * 
   * @example
   * URL
   */
  type?: string;
  /**
   * @remarks
   * The URL to visit after the button is clicked.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   *  
   * - static: Static URL.
   * 
   * - dynamic: Dynamic URL.
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents extends $dara.Model {
  /**
   * @remarks
   * The list of card buttons.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons[];
  /**
   * @remarks
   * The header type for carousel templates. Only IMAGE and VIDEO are supported. The header must be consistent across all cards.
   * 
   * @example
   * HEADER
   */
  format?: string;
  /**
   * @remarks
   * The text content of the card.
   * 
   * @example
   * Body
   */
  text?: string;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * HEADER
   */
  type?: string;
  /**
   * @remarks
   * The web address.
   * 
   * @example
   * https://aliyun.com
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
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponentsButtons },
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

export class GetChatappTemplateDetailResponseBodyDataComponentsCards extends $dara.Model {
  /**
   * @remarks
   * The list of card components.
   */
  cardComponents?: GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents[];
  static names(): { [key: string]: string } {
    return {
      cardComponents: 'CardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardComponents: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCardsCardComponents },
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

export class GetChatappTemplateDetailResponseBodyDataComponents extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to display a security recommendation above the body to warn users not to share the verification code with others. This parameter is valid only for WhatsApp templates where the category is Authentication and the component type is Body.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The list of buttons. This parameter is valid only for the **BUTTONS** component.
   * 
   * > WhatsApp button limits
   * > - For MARKETING or UTILITY templates, a maximum of 10 buttons are allowed.
   * > - Only one PHONE_NUMBER button is allowed.
   * > - A maximum of two URL buttons are allowed.
   * > - QUICK_REPLY buttons must not be interspersed with PHONE_NUMBER or URL buttons.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsButtons[];
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * example
   */
  caption?: string;
  /**
   * @remarks
   * The list of carousel cards.
   */
  cards?: GetChatappTemplateDetailResponseBodyDataComponentsCards[];
  /**
   * @remarks
   * The expiration time of the verification code in minutes for WhatsApp authentication templates. This is valid only for WhatsApp messages where the category is Authentication and the component type is Footer. This information is displayed in the footer.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The duration of the video in seconds for Viber video messages. Valid values: 0 to 600.
   * 
   * @example
   * 50
   */
  duration?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * example
   */
  fileName?: string;
  /**
   * @remarks
   * The file type for Viber file messages.
   * 
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @remarks
   * The format.
   * 
   * @example
   * TEXT
   */
  format?: string;
  /**
   * @remarks
   * The latitude of the location.
   * 
   * @example
   * 28.001
   */
  latitude?: string;
  /**
   * @remarks
   * The address of the location.
   * 
   * @example
   * hangzhou
   */
  locationAddress?: string;
  /**
   * @remarks
   * The name of the location.
   * 
   * @example
   * hangzhou
   */
  locationName?: string;
  /**
   * @remarks
   * The longitude of the location.
   * 
   * @example
   * 120.002
   */
  longitude?: string;
  /**
   * @remarks
   * The expiration variable of the offer code for limited-time offer (LTO) templates.
   * 
   * @example
   * $(offerExpirationTimeMs)
   */
  offerExpirationTimeMs?: string;
  /**
   * @remarks
   * The text of the message to send.
   * 
   * @example
   * hello
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail URL for Viber video messages.
   * 
   * @example
   * https://img.png
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
   * > - For WhatsApp templates, the **BODY** component cannot exceed 1,024 characters. The **HEADER** and **FOOTER** components cannot exceed 60 characters.
   * > - For Viber templates, the **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** types are invalid.
   * > - In Viber templates, images, videos, and files are placed in the **HEADER**. The client displays the image below the text.
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
   * https://image.developer.aliyundoc.com
   */
  url?: string;
  /**
   * @remarks
   * Indicates whether the offer code has an expiration time in LTO templates.
   * 
   * @example
   * true
   */
  hasExpiration?: boolean;
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
      latitude: 'Latitude',
      locationAddress: 'LocationAddress',
      locationName: 'LocationName',
      longitude: 'Longitude',
      offerExpirationTimeMs: 'OfferExpirationTimeMs',
      text: 'Text',
      thumbUrl: 'ThumbUrl',
      type: 'Type',
      url: 'Url',
      hasExpiration: 'hasExpiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSecretRecommendation: 'boolean',
      buttons: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsButtons },
      caption: 'string',
      cards: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponentsCards },
      codeExpirationMinutes: 'number',
      duration: 'number',
      fileName: 'string',
      fileType: 'string',
      format: 'string',
      latitude: 'string',
      locationAddress: 'string',
      locationName: 'string',
      longitude: 'string',
      offerExpirationTimeMs: 'string',
      text: 'string',
      thumbUrl: 'string',
      type: 'string',
      url: 'string',
      hasExpiration: 'boolean',
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

export class GetChatappTemplateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current template can be sent. This parameter is valid only for marketing templates.
   * 
   * @example
   * true
   */
  allowSend?: boolean;
  /**
   * @remarks
   * The review status. Valid values:
   * 
   * - **pass**: Approved.
   * 
   * - **fail**: Rejected.
   * 
   * - **auditing**: Under review.
   * 
   * - **unaudit**: Review suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The WhatsApp template category. Valid values:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing template.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * The Viber template category. Valid values:
   * 
   * - **UTILITY**: Transaction-related.
   * 
   * - **MARKETING**: Marketing template.
   * 
   * - **AUTHENTICATION**: Authentication.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the template sending is paused when a utility template is changed to a marketing template.
   * 
   * @example
   * true
   */
  categoryChangePaused?: boolean;
  /**
   * @remarks
   * The list of message template components.
   */
  components?: GetChatappTemplateDetailResponseBodyDataComponents[];
  /**
   * @remarks
   * The variable example.
   */
  example?: { [key: string]: string };
  /**
   * @remarks
   * The template language. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The time-to-live (TTL) of the message in seconds when sending messages by using WhatsApp authentication templates.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The template name.
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
   * 939***
   */
  productSetId?: string;
  /**
   * @remarks
   * The quality of the template. Valid values:
   * - RED: Low quality.
   * - YELLOW: Medium quality.
   * - UNKNOWN: Unknown quality.
   * - GREEN: High quality.
   * 
   * @example
   * GREEN
   */
  qualityScore?: string;
  /**
   * @remarks
   * The reason why the template was rejected.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - **WHATSAPP**
   * 
   * - **VIBER**
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      allowSend: 'AllowSend',
      auditStatus: 'AuditStatus',
      category: 'Category',
      categoryChangePaused: 'CategoryChangePaused',
      components: 'Components',
      example: 'Example',
      language: 'Language',
      messageSendTtlSeconds: 'MessageSendTtlSeconds',
      name: 'Name',
      productSetId: 'ProductSetId',
      qualityScore: 'QualityScore',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSend: 'boolean',
      auditStatus: 'string',
      category: 'string',
      categoryChangePaused: 'boolean',
      components: { 'type': 'array', 'itemType': GetChatappTemplateDetailResponseBodyDataComponents },
      example: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      messageSendTtlSeconds: 'number',
      name: 'string',
      productSetId: 'string',
      qualityScore: 'string',
      reason: 'string',
      templateCode: 'string',
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

export class GetChatappTemplateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A return value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * { 		"category": "ACCOUNT_UPDATE", 		"name": "account_notice", 		"language": "en_US", 		"templateCode": "744c4b5c79c9432497a075bdfca3****", 		"auditStatus": "APPROVED", 		"components": "[{\\"type\\":\\"BODY\\",\\"text\\":\\"body_text$(textVariable)\\"},{\\"type\\":\\"HEADER\\",\\"formate\\":\\"IMAGE\\",\\"url\\":\\"$(linkVariable)\\"},{\\"type\\":\\"FOOTER\\",\\"text\\":\\"footer-text\\"},{\\"type\\":\\"BUTTONS\\",\\"buttons\\":[{\\"type\\":\\"PHONE_NUMBER\\",\\"text\\":\\"phone-button-text\\",\\"phone_number\\":\\"+861388888****\\"},{\\"type\\":\\"URL\\",\\"text\\":\\"url-button-text\\",\\"url\\":\\"https://www.website.com/\\"}]}]", 		"example": "{\\"textVariable\\": \\"text\\", \\"linkVariable\\": \\"link\\"}" 	}
   */
  data?: GetChatappTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetChatappTemplateDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

