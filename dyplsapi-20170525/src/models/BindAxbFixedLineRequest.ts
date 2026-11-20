// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxbFixedLineRequestExtra extends $dara.Model {
  /**
   * @remarks
   * The call recording control. Valid values:
   * 
   * - 0 (default): Do not record the call.
   * 
   * - 1: Record the call.
   * > After you enable call recording, you can play and download voice files in the call records. Recording files are billed at CNY 0.010 per minute.
   * 
   * @example
   * 0
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

export class BindAxbFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * The caller-side announcement code. This parameter is required for the fixed-line AXB privacy number service. The code must include announcements for three scenarios. Specify the codes in the order of "B->X, A->X, other numbers->X", separated by commas.
   * 
   * > For example, "1,2,3" indicates that the announcement code for B->X is 1, the announcement code for A->X is 2, and the announcement code for other numbers->X is 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The callee-side announcement code after the call is connected. The code must include announcements for two scenarios. Specify the codes in the order of "A as callee, B as callee", separated by commas.
   * 
   * > For example, "1,2" indicates that the announcement code when Number A answers as the callee is 1, and the announcement code when Number B answers as the callee is 2.
   * 
   * @example
   * 1,2
   */
  anucodecalled?: string;
  /**
   * @remarks
   * The ID of the number pool.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  appId?: string;
  /**
   * @remarks
   * The area code. You can specify the location of Number X (specified city -> provincial capital -> national routing). If you do not specify a location, a number is randomly assigned nationwide.
   * 
   * @example
   * 0571
   */
  areacode?: string;
  /**
   * @remarks
   * The binding type. Valid values:
   * 
   * - mode101: The customer specifies Number X.
   * 
   * - mode102: The platform allocates Number X.
   * 
   * This parameter is required.
   * 
   * @example
   * mode101
   */
  bindType?: string;
  /**
   * @remarks
   * The expiration time. Unit: seconds. Valid values:
   * 
   * - 0: The binding never expires.
   * 
   * - Other values: If you specify another value, such as 60, the binding is valid for 60 seconds after Number X is successfully allocated. After 60 seconds, the binding is automatically unbound.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extended parameters.
   */
  extra?: BindAxbFixedLineRequestExtra;
  /**
   * @remarks
   * The unique identifier of the message request.
   * 
   * This parameter is required.
   * 
   * @example
   * 123*******
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The external business extension field. This parameter is returned in the call record receipt message. The value cannot exceed 100 characters in length.
   * 
   * @example
   * 19394
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding time. The format is yyyyMMddHHmmss. The time is in UTC+8 and uses the 24-hour clock.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The caller-side announcement code after the call is connected. The code must include announcements for two scenarios. Specify the codes in the order of "A as callee, B as callee", separated by commas.
   * 
   * > For example, "1,2" indicates that the caller-side announcement code when Number A is the callee is 1, and the caller-side announcement code when Number B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * Number A of the fixed-line AXB privacy number.
   * 
   * > - Number A can be a mobile phone number or a fixed-line number. For a fixed-line number, add the area code. No hyphen is required between the area code and the fixed-line number. 
   * > - If your business requires modifying a bound number, you can call the [UpdateAxbBindFixedLine](https://api.aliyun.com/document/Dyplsapi/2017-05-25/UpdateAxbBindFixedLine) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Fixed-line number: 0571******36
   */
  telA?: string;
  /**
   * @remarks
   * Number B of the fixed-line AXB privacy number.
   * 
   * > - Number B can be a mobile phone number or a fixed-line number. For a fixed-line number, add the area code. No hyphen is required between the area code and the fixed-line number.
   * > - If your business requires modifying a bound number, you can call the [UpdateAxbBindFixedLine](https://api.aliyun.com/document/Dyplsapi/2017-05-25/UpdateAxbBindFixedLine) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Fixed-line number: 0571******36
   */
  telB?: string;
  /**
   * @remarks
   * Number X of the fixed-line AXB privacy number. Number X is a privacy number that you have [purchased](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * 
   * > This parameter is required when the customer specifies Number X (that is, the BindType parameter is set to mode101).
   * 
   * @example
   * 0571******23
   */
  telX?: string;
  /**
   * @remarks
   * The business timestamp. The format is yyyyMMddHHmmssSSS. The time is in UTC+8 and uses the 24-hour clock, accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116123
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      appId: 'AppId',
      areacode: 'Areacode',
      bindType: 'BindType',
      expiration: 'Expiration',
      extra: 'Extra',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      areacode: 'string',
      bindType: 'string',
      expiration: 'string',
      extra: BindAxbFixedLineRequestExtra,
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
      telX: 'string',
      ts: 'string',
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

