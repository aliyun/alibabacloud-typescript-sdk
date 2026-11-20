// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxbBindFixedLineResponseBodyDataExtra extends $dara.Model {
  /**
   * @remarks
   * The call recording control. Valid values:
   * 
   * - 0 (default): Do not record.
   * 
   * - 1: Record.
   * 
   * > After the call recording feature is enabled, you can play and download voice files in the call records. Recording files are billed at 0.010 CNY per minute.
   * 
   * @example
   * 1
   */
  callrecording?: string;
  static names(): { [key: string]: string } {
    return {
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class QueryAxbBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ringback tone code played before the call is connected. The code must include codes for three scenarios. Specify the codes in the order of "B->X, A->X, other numbers->X", separated by commas. 
   * 
   * > "1,2,3" indicates that the ringback tone code for B->X is 1, for A->X is 2, and for other numbers->X is 3.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The ringback tone code played to the called party after the call is connected.
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
   * - 0: Never expires.
   * 
   * - Other values: When set to another value such as 60, the binding remains valid for 60 seconds after the X number is successfully assigned. After 60 seconds, the binding is automatically released.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extended parameters.
   */
  extra?: QueryAxbBindFixedLineResponseBodyDataExtra;
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
   * The ringback tone code played to the caller after the call is connected. The code must include codes for two scenarios. Specify the codes in the order of "A as callee, B as callee", separated by commas.
   * 
   * > "1,2" indicates that the ringback tone code played to the caller when A is the callee is 1, and when B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The A number.
   * 
   * @example
   * 155****1111
   */
  telA?: string;
  /**
   * @remarks
   * The B number.
   * 
   * @example
   * 155****2222
   */
  telB?: string;
  /**
   * @remarks
   * The X number of the AXB landline privacy number. The X number is a privacy number that you have [purchased](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
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
      extra: QueryAxbBindFixedLineResponseBodyDataExtra,
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

export class QueryAxbBindFixedLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The API request status code. Valid values:
   * 0: Success. For other error codes, see [API error codes](https://help.aliyun.com/document_detail/59892.html).
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The binding information.
   */
  data?: QueryAxbBindFixedLineResponseBodyData;
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
   * 3179F199-C6C5-5963-85A6-21CBA2F47592
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - true: Success.
   * 
   * - false: Failure.
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
      data: QueryAxbBindFixedLineResponseBodyData,
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

