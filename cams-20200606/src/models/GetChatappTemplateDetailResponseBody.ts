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
   * The next template language.
   * 
   * @example
   * en
   */
  nextLanguageCode?: string;
  /**
   * @remarks
   * The next template code.
   * 
   * @example
   * 20939920093993
   */
  nextTemplateCode?: string;
  /**
   * @remarks
   * The next template name.
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
   * Required for WhatsApp templates with Category set to Authentication and Button Type set to ONE_TAP. Specifies the button text for the WhatsApp Autofill operation.
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
   * The extended fields.
   */
  extendAttrs?: GetChatappTemplateDetailResponseBodyDataComponentsButtonsExtendAttrs;
  /**
   * @remarks
   * The Flow data event type. Valid values:
   * 
   * - NAVIGATE: navigation.
   * 
   * - DATA_EXCHANGE: data exchange.
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
   * Valid for WhatsApp templates with Category set to Marketing and Button Type set to QUICK_REPLY. Indicates that the button is a marketing opt-out button. If a customer clicks this button and the send control operation is configured on the Chat App Message Service platform, subsequent Marketing messages will not be sent to the customer.
   * 
   * @example
   * false
   */
  isOptOut?: boolean;
  /**
   * @remarks
   * The navigate screen. Required when FlowAction is set to NAVIGATE.
   * 
   * @example
   * DETAILS
   */
  navigateScreen?: string;
  /**
   * @remarks
   * Required for WhatsApp templates with Category set to Authentication and Button Type set to ONE_TAP. Specifies the package name for WhatsApp to launch the application.
   * 
   * @example
   * com.aliyun
   */
  packageName?: string;
  /**
   * @remarks
   * The phone number. Valid only when the button type is **PHONE_NUMBER**.
   * 
   * @example
   * +861398745****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Required for WhatsApp templates with Category set to Authentication and Button Type set to ONE_TAP. Specifies the signature hash value for WhatsApp to launch the application.
   * 
   * @example
   * 2993839
   */
  signatureHash?: string;
  /**
   * @remarks
   * The applications supported by the ONE_TAP/ZERO_TAP verification code.
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
   * The button type.
   * 
   * - **PHONE_NUMBER**: phone call button.
   * 
   * - **URL**: web page button.
   * 
   * - **QUICK_REPLY**: quick reply button.
   * 
   * - **COPY_CODE**: copy verification code or coupon code.
   * 
   * - **ONE_TAP**: autofill button for AUTHENTICATION templates.
   * 
   * - **ZERO_TAP**: autofill button for AUTHENTICATION templates.
   * 
   * - **MPM**: multi-product catalog.
   * 
   * - **CATALOG**: catalog.
   * 
   * - **FLOW**: open WhatsApp flow.
   * 
   * > - For WhatsApp templates with Category set to AUTHENTICATION, only one button is allowed, and the type can only be COPY_CODE or ONE_TAP. If the type is COPY_CODE, Text is required. If the type is ONE_TAP, Text (displayed when the target application is not installed on the device, indicating the name of the copy verification code button), SignatureHash, PackageName, and AutofillText are required.
   * > - Viber templates allow only one button, and it must be of the URL type.
   * 
   * @example
   * PHONE_NUMBER
   */
  type?: string;
  /**
   * @remarks
   * The URL that is accessed when the link button is clicked.
   * 
   * @example
   * https://example.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type.
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
   * The button type for a carousel template. Valid values: URL, PHONE_NUMBER, or QUICK_REPLY.
   * 
   * @example
   * URL
   */
  type?: string;
  /**
   * @remarks
   * The URL to visit when the button is clicked.
   * 
   * @example
   * https://aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The URL type. Valid values:
   *  
   * - static: static.
   * 
   * - dynamic: dynamic.
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
   * The header type in a carousel template. Only IMAGE and VIDEO are supported. All cards must have the same header type.
   * 
   * @example
   * HEADER
   */
  format?: string;
  /**
   * @remarks
   * The card text content.
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
   * The web URL.
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
   * Valid for WhatsApp templates when Category is Authentication and Component Type is Body. Indicates whether a security recommendation message that advises users not to share the verification code is displayed above the Body.
   * 
   * @example
   * false
   */
  addSecretRecommendation?: boolean;
  /**
   * @remarks
   * The button list. Applicable only to the **BUTTONS** component.
   * 
   * > WhatsApp button quantity rules:
   * > - For WhatsApp templates with Category set to MARKETING or UTILITY, a maximum of 10 buttons are allowed.
   * > - Only 1 PHONE_NUMBER button is allowed.
   * > - A maximum of 2 URL buttons are allowed.
   * > - QUICK_REPLY buttons cannot be mixed in random order with PHONE_NUMBER or URL buttons.
   */
  buttons?: GetChatappTemplateDetailResponseBodyDataComponentsButtons[];
  /**
   * @remarks
   * The file description.
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
   * The verification code validity period in minutes for WhatsApp Authentication templates. Valid only when the message type is WhatsApp, Category is Authentication, and Component Type is Footer. This information is displayed in the Footer position.
   * 
   * @example
   * 5
   */
  codeExpirationMinutes?: number;
  /**
   * @remarks
   * The video duration of a Viber video message. Valid values: 0 to 600.
   * 
   * @example
   * 50
   */
  duration?: number;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * example
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
   * The location address.
   * 
   * @example
   * hangzhou
   */
  locationAddress?: string;
  /**
   * @remarks
   * The location name.
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
   * The offer code expiration variable in a Limited Time Offer (LTO) template.
   * 
   * @example
   * $(offerExpirationTimeMs)
   */
  offerExpirationTimeMs?: string;
  /**
   * @remarks
   * The text of the message to be sent.
   * 
   * @example
   * hello
   */
  text?: string;
  /**
   * @remarks
   * The thumbnail for a Viber video message.
   * 
   * @example
   * https://img.png
   */
  thumbUrl?: string;
  /**
   * @remarks
   * The component type.
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
   * > - For WhatsApp templates, the **BODY** component cannot exceed 1024 characters. The **HEADER** and **FOOTER** components cannot exceed 60 characters.
   * > - For Viber templates, the **FOOTER**, **CAROUSEL**, and **LIMITED_TIME_OFFER** types are invalid.
   * > - For Viber templates, images, videos, and files are placed in the **HEADER** (the device displays images below the text).
   * 
   * @example
   * BODY
   */
  type?: string;
  /**
   * @remarks
   * The material URL.
   * 
   * @example
   * https://image.developer.aliyundoc.com
   */
  url?: string;
  /**
   * @remarks
   * Specifies whether the offer code has an expiration time in a Limited Time Offer (LTO) template.
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
   * Indicates whether the current template can be used for sending. This parameter is valid only for Marketing templates.
   * 
   * @example
   * true
   */
  allowSend?: boolean;
  /**
   * @remarks
   * The audit status. Valid values:
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
   * - **UTILITY**: transaction-related.
   * 
   * - **MARKETING**: marketing template.
   * 
   * - **AUTHENTICATION**: identity verification.
   * 
   * Viber template category. Valid values:
   * 
   * - **UTILITY**: transaction-related.
   * 
   * - **MARKETING**: marketing template.
   * 
   * - **AUTHENTICATION**: identity verification.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether template sending is paused when a Utility template is changed to a Marketing template.
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
   * The language of the template. For detailed language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The message time-to-live when sending WhatsApp Authentication template messages.
   * 
   * @example
   * 120
   */
  messageSendTtlSeconds?: number;
  /**
   * @remarks
   * The name of the template.
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
   * The template quality.
   * - RED: Low quality.
   * - YELLOW: Medium quality.
   * - UNKNOWN: Quality unknown.
   * - GREEN: High quality.
   * 
   * @example
   * GREEN
   */
  qualityScore?: string;
  /**
   * @remarks
   * The reason for template review rejection.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The code of the template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The templatetype.
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
   * The access denied detail information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
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

