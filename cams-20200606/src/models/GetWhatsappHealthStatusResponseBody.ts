// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappHealthStatusResponseBodyDataEntitiesErrors extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 141006
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * There is an error with the payment method.
   */
  errorDescription?: string;
  /**
   * @remarks
   * The possible solutions.
   * 
   * @example
   * There was an error with your payment method. Please add a new payment method to the account.
   */
  possibleSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      possibleSolution: 'PossibleSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      possibleSolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBodyDataEntities extends $dara.Model {
  /**
   * @remarks
   * The business platform ID.
   * 
   * @example
   * 3992****
   */
  businessId?: string;
  /**
   * @remarks
   * Specifies whether messages can be sent.
   * 
   * @example
   * AVAILABLE
   */
  canSendMessage?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * PHONE_NUMBER
   */
  entityType?: string;
  /**
   * @remarks
   * The list of errors.
   */
  errors?: GetWhatsappHealthStatusResponseBodyDataEntitiesErrors[];
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The sender phone number.
   * 
   * @example
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The template code. This field is required when NodeType is set to **template**.
   * 
   * @example
   * 939928****
   */
  templateCode?: string;
  /**
   * @remarks
   * The WABA account ID. You can view the WABA ID in the [Chat App Message Service console](https://cams.console.aliyun.com/) after WABA registration is completed.
   * 
   * @example
   * 39939***
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      canSendMessage: 'CanSendMessage',
      entityType: 'EntityType',
      errors: 'Errors',
      language: 'Language',
      phoneNumber: 'PhoneNumber',
      templateCode: 'TemplateCode',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      canSendMessage: 'string',
      entityType: 'string',
      errors: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntitiesErrors },
      language: 'string',
      phoneNumber: 'string',
      templateCode: 'string',
      wabaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether messages can be sent.
   * 
   * @example
   * AVAILABLE
   */
  canSendMessage?: string;
  /**
   * @remarks
   * The retrieved entity data.
   */
  entities?: GetWhatsappHealthStatusResponseBodyDataEntities[];
  static names(): { [key: string]: string } {
    return {
      canSendMessage: 'CanSendMessage',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSendMessage: 'string',
      entities: { 'type': 'array', 'itemType': GetWhatsappHealthStatusResponseBodyDataEntities },
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWhatsappHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
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
   * - For other error codes, see [Error codes](https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetWhatsappHealthStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAC72B08-3327-33EF-BEDC-8EC3E83A6575
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * - **true**: The call is successful.
   * - **false**: The call fails.
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
      data: GetWhatsappHealthStatusResponseBodyData,
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

