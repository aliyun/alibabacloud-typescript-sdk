// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListViberServiceMessageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business account name.
   * 
   * @example
   * Test.
   */
  businessAccountName?: string;
  /**
   * @remarks
   * The destination country or region ID.
   */
  destinationCountryId?: string[];
  /**
   * @remarks
   * The destination country or region ID.
   */
  destinationInternationalCountryId?: string[];
  /**
   * @remarks
   * The industry involved.
   * 
   * @example
   * Healthcare.
   */
  industryInvolved?: string;
  /**
   * @remarks
   * The collection of destination countries or regions.
   */
  messageDestinationCountry?: string[];
  /**
   * @remarks
   * The list of international destination countries or regions.
   */
  messageDestinationInternationalCountry?: string[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 25644
   */
  serviceId?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * stop
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      businessAccountName: 'BusinessAccountName',
      destinationCountryId: 'DestinationCountryId',
      destinationInternationalCountryId: 'DestinationInternationalCountryId',
      industryInvolved: 'IndustryInvolved',
      messageDestinationCountry: 'MessageDestinationCountry',
      messageDestinationInternationalCountry: 'MessageDestinationInternationalCountry',
      serviceId: 'ServiceId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessAccountName: 'string',
      destinationCountryId: { 'type': 'array', 'itemType': 'string' },
      destinationInternationalCountryId: { 'type': 'array', 'itemType': 'string' },
      industryInvolved: 'string',
      messageDestinationCountry: { 'type': 'array', 'itemType': 'string' },
      messageDestinationInternationalCountry: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationCountryId)) {
      $dara.Model.validateArray(this.destinationCountryId);
    }
    if(Array.isArray(this.destinationInternationalCountryId)) {
      $dara.Model.validateArray(this.destinationInternationalCountryId);
    }
    if(Array.isArray(this.messageDestinationCountry)) {
      $dara.Model.validateArray(this.messageDestinationCountry);
    }
    if(Array.isArray(this.messageDestinationInternationalCountry)) {
      $dara.Model.validateArray(this.messageDestinationInternationalCountry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListViberServiceMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   * 
   * @example
   * {}
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
   * The returned data object.
   */
  data?: ListViberServiceMessageResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. This is used for troubleshooting when an error occurs.
   * 
   * @example
   * ddhjdn-dnjdnkdjknd**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
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
      data: { 'type': 'array', 'itemType': ListViberServiceMessageResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

