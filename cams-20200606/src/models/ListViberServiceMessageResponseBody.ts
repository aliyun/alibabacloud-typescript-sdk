// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListViberServiceMessageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  businessAccountName?: string;
  destinationCountryId?: string[];
  destinationInternationalCountryId?: string[];
  /**
   * @example
   * 示例值
   */
  industryInvolved?: string;
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * 25644
   */
  serviceId?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListViberServiceMessageResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * ddhjdn-dnjdnkdjknd**
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

