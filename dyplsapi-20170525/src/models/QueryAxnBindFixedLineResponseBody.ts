// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnBindFixedLineResponseBodyDataExtra extends $dara.Model {
  /**
   * @remarks
   * The callback control. A calls X, meaning A is the caller and X is the callee. Valid values:
   * 
   * - 0 (default): outbound calls are not allowed.
   * 
   * - 1: the call is connected to the most recent N phone number.
   * 
   * - 2: the call is connected to the fixed phone number TelB.
   * 
   * @example
   * 1
   */
  callback?: string;
  /**
   * @remarks
   * The call recording control. Valid values:
   * 
   * - 0 (default): recording is disabled.
   * 
   * - 1: recording is enabled.
   * 
   * > After the call recording feature is enabled, you can play and download voice files in the call records. Recording files are billed at 0.010 CNY per minute.
   * 
   * @example
   * 1
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

export class QueryAxnBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pre-connection ringback tone codes. The value must contain codes for three scenarios, specified in the order of "B->X, A->X, other numbers->X" and separated by commas. 
   * 
   * > "1,2,3" indicates that the ringback tone code for B->X is 1, the code for A->X is 2, and the code for other numbers->X is 3.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The ringback tone code for the called party.
   * 
   * @example
   * 10001,10002
   */
  anucodecalled?: string;
  /**
   * @remarks
   * The area code of the privacy number.
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
   * - Other values: the binding remains valid for the specified number of seconds after the X phone number is assigned. For example, if the value is 60, the binding expires and is automatically released after 60 seconds.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extended parameters.
   */
  extra?: QueryAxnBindFixedLineResponseBodyDataExtra;
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
   * GHX**************************
   */
  subid?: string;
  /**
   * @remarks
   * The binding time. Format: yyyyMMddHHmmss. The time is in UTC+8, in 24-hour format.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The post-connection ringback tone codes for the caller. The value must contain codes for two scenarios, specified in the order of "A as callee, B as callee" and separated by commas.
   * 
   * > "1,2" indicates that the ringback tone code for the caller when A is the callee is 1, and the code for the caller when B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The A phone number.
   * 
   * @example
   * 155****1111
   */
  telA?: string;
  /**
   * @remarks
   * The N phone number.
   * 
   * @example
   * 155****2222
   */
  telB?: string;
  /**
   * @remarks
   * The privacy number.
   * 
   * @example
   * 0571******23
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      areacode: 'Areacode',
      expiration: 'Expiration',
      extra: 'Extra',
      remark: 'Remark',
      subid: 'Subid',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      areacode: 'string',
      expiration: 'string',
      extra: QueryAxnBindFixedLineResponseBodyDataExtra,
      remark: 'string',
      subid: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
      telX: 'string',
    };
  }

  validate() {
    if(this.extra && typeof (this.extra as any).validate === 'function') {
      (this.extra as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnBindFixedLineResponseBody extends $dara.Model {
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
   * 0: success. For other error codes, see [API error codes](https://help.aliyun.com/document_detail/59892.html).
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The list of binding objects.
   */
  data?: QueryAxnBindFixedLineResponseBodyData[];
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
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * E8B9C3ED-D9BD-5E27-9588-6D84D3070160
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: The call was successful.
   * 
   * - false: The call failed.
   * 
   * @example
   * false
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
      data: { 'type': 'array', 'itemType': QueryAxnBindFixedLineResponseBodyData },
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

