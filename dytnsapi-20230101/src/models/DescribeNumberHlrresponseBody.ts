// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeNumberHLRResponseBodyDataCall extends $dara.Model {
  /**
   * @remarks
   * call
   * 
   * @example
   * 示例值
   */
  cleansedCode?: string;
  /**
   * @example
   * 22
   */
  maxLength?: number;
  /**
   * @example
   * 21
   */
  minLength?: number;
  static names(): { [key: string]: string } {
    return {
      cleansedCode: 'CleansedCode',
      maxLength: 'MaxLength',
      minLength: 'MinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleansedCode: 'string',
      maxLength: 'number',
      minLength: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberHLRResponseBodyDataLive extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  deviceStatus?: string;
  /**
   * @example
   * 示例值示例值
   */
  roaming?: string;
  /**
   * @example
   * 示例值
   */
  roamingCountry?: string;
  /**
   * @example
   * 示例值
   */
  subscriberStatus?: string;
  static names(): { [key: string]: string } {
    return {
      deviceStatus: 'DeviceStatus',
      roaming: 'Roaming',
      roamingCountry: 'RoamingCountry',
      subscriberStatus: 'SubscriberStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStatus: 'string',
      roaming: 'string',
      roamingCountry: 'string',
      subscriberStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberHLRResponseBodyDataSms extends $dara.Model {
  /**
   * @remarks
   * sms
   * 
   * @example
   * 58
   */
  cleansedCode?: number;
  /**
   * @example
   * 59
   */
  maxLength?: number;
  /**
   * @example
   * 2
   */
  minLength?: number;
  static names(): { [key: string]: string } {
    return {
      cleansedCode: 'CleansedCode',
      maxLength: 'MaxLength',
      minLength: 'MinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleansedCode: 'number',
      maxLength: 'number',
      minLength: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberHLRResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  blocked?: string;
  call?: DescribeNumberHLRResponseBodyDataCall;
  /**
   * @example
   * 示例值示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @example
   * 示例值示例值
   */
  countryIso3?: string;
  live?: DescribeNumberHLRResponseBodyDataLive;
  /**
   * @example
   * 示例值示例值
   */
  phoneType?: string;
  sms?: DescribeNumberHLRResponseBodyDataSms;
  static names(): { [key: string]: string } {
    return {
      blocked: 'Blocked',
      call: 'Call',
      carrier: 'Carrier',
      city: 'City',
      countryIso3: 'CountryIso3',
      live: 'Live',
      phoneType: 'PhoneType',
      sms: 'Sms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocked: 'string',
      call: DescribeNumberHLRResponseBodyDataCall,
      carrier: 'string',
      city: 'string',
      countryIso3: 'string',
      live: DescribeNumberHLRResponseBodyDataLive,
      phoneType: 'string',
      sms: DescribeNumberHLRResponseBodyDataSms,
    };
  }

  validate() {
    if(this.call && typeof (this.call as any).validate === 'function') {
      (this.call as any).validate();
    }
    if(this.live && typeof (this.live as any).validate === 'function') {
      (this.live as any).validate();
    }
    if(this.sms && typeof (this.sms as any).validate === 'function') {
      (this.sms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberHLRResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DescribeNumberHLRResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 1C3B8084-3A7D-570B-BC84-BF945A9CF65E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribeNumberHLRResponseBodyData,
      message: 'string',
      requestId: 'string',
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

