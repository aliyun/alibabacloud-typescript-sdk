// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx extends $dara.Model {
  /**
   * @remarks
   * The callback control. Number A calls through X, meaning A is the caller and X is the callee. Valid values:
   * 
   * - 0 (default): outbound calls are not allowed.
   * 
   * - 1: connects to the most recent number N.
   * 
   * - 2: calls back the fixed number TelB.
   * 
   * @example
   * 0
   */
  callback?: string;
  /**
   * @remarks
   * The recording control. Valid values:
   * 
   * - 0 (default): recording is disabled.
   * 
   * - 1: recording is enabled.
   * 
   * > After the call recording feature is enabled, you can play and download voice files in the call records. Recording files are billed at 0.010 CNY per minute.
   * 
   * @example
   * 0
   */
  callrecording?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callrecording: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnExtensionBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ringback tone code.
   * 
   * @example
   * 10001,10002,10003
   */
  anucode?: string;
  /**
   * @remarks
   * The ringback tone played to the called party.
   * 
   * @example
   * 10001,10002
   */
  anucodecalled?: string;
  /**
   * @remarks
   * The area code of the private number.
   * 
   * @example
   * 0571
   */
  areacode?: string;
  /**
   * @remarks
   * The expiration time, in seconds. Valid values:
   * 
   * - 0: never expires.
   * 
   * - Other values: the binding is valid for the specified duration after the X number is successfully assigned. For example, if the value is 60, the binding is valid for 60 seconds and is automatically unbound after 60 seconds.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extension fields.
   */
  extraaxx?: QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx;
  /**
   * @remarks
   * The external business extension field. This parameter is returned in the call record receipt message. The value cannot exceed 100 characters.
   * 
   * @example
   * 19394
   */
  remark?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * A203**************
   */
  subid?: string;
  /**
   * @remarks
   * The binding time, in the format of yyyyMMddHHmmss. The time is in UTC+8, in 24-hour format.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The ringback tone code played to the caller after the call is connected.
   * 
   * @example
   * 10001,10002
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The number A.
   * 
   * @example
   * 155****1111
   */
  telA?: string;
  /**
   * @remarks
   * The private number.
   * 
   * @example
   * 0571******23
   */
  telX?: string;
  /**
   * @remarks
   * The extension number.
   * 
   * @example
   * 1009
   */
  telXext?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      areacode: 'Areacode',
      expiration: 'Expiration',
      extraaxx: 'Extraaxx',
      remark: 'Remark',
      subid: 'Subid',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telX: 'TelX',
      telXext: 'TelXext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      areacode: 'string',
      expiration: 'string',
      extraaxx: QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx,
      remark: 'string',
      subid: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telX: 'string',
      telXext: 'string',
    };
  }

  validate() {
    if(this.extraaxx && typeof (this.extraaxx as any).validate === 'function') {
      (this.extraaxx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnExtensionBindFixedLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission verification failure.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The API request status code. Valid values:
   * 
   * - 0: Success.
   * 
   * - For other error codes, see [API error codes](https://help.aliyun.com/document_detail/59892.html).
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The list of binding objects.
   */
  data?: QueryAxnExtensionBindFixedLineResponseBodyData[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 74EFA0E8-CFCA-54D9-BFE5-904F9FA88DBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Success.
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
      data: { 'type': 'array', 'itemType': QueryAxnExtensionBindFixedLineResponseBodyData },
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

