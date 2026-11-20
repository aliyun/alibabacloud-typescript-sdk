// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnFixedLineRequestExtra extends $dara.Model {
  /**
   * @remarks
   * The callback control. This applies when User A makes a call through number X, meaning User A calls number X. Valid values:
   * 
   * - 0 (default): Outbound calls are not allowed.
   * 
   * - 1: Connects to the most recent number N.
   * 
   * - 2: Calls back the fixed number TelB.
   * 
   * @example
   * 0
   */
  callback?: string;
  /**
   * @remarks
   * The call recording control. Valid values:
   * 
   * - 0 (default): Call recording is disabled.
   * 
   * - 1: Call recording is enabled.
   * 
   * > After you enable call recording, you can play and download audio files in the call records. Audio files are billed at CNY 0.010 per minute.
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

export class BindAxnFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * The audio prompt codes for the caller side. The value must include codes for three scenarios. Specify the codes in the order of B->X, A->X, and other numbers->X, separated by commas.
   * 
   * > For example, 1,2,3 indicates that the audio prompt code for B->X is 1, the code for A->X is 2, and the code for other numbers->X is 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The audio prompt codes for the callee side. The value must include codes for two scenarios. Specify the codes in the order of A as the callee and other numbers as the callee, separated by commas.
   * 
   * > For example, 1,2 indicates that the audio prompt code when number A answers as the callee is 1, and the code when other numbers answer as the callee is 2.
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
   * The area code. You can specify the location of number X (specified city -> provincial capital -> national routing). If you do not specify the location, a number is randomly assigned nationwide.
   * 
   * @example
   * 0571
   */
  areacode?: string;
  /**
   * @remarks
   * The binding type. Valid values:
   * 
   * - mode101: The customer specifies number X.
   * 
   * - mode102: The platform assigns number X.
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
   * - Other values: If you specify another value, such as 60, the binding is valid for 60 seconds after number X is successfully assigned. After 60 seconds, the binding is automatically unbound.
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
  extra?: BindAxnFixedLineRequestExtra;
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
   * The audio prompt codes for the caller side after the call is connected. The value must include codes for two scenarios. Specify the codes in the order of A as the callee and other numbers as the callee, separated by commas.
   * 
   * > For example, 1,2 indicates that the audio prompt code for the caller side when number A is the callee is 1, and the code for the caller side when other numbers are the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * Number A of the fixed-line AXN privacy number.
   * 
   * 
   * > - Number A can be a mobile phone number or a fixed-line number. A fixed-line number must include the area code, and no hyphen is required between the area code and the number.
   * > - If your business requires modifying a bound number, you can call the [UpdateAxnBindFixedLine](https://api.aliyun.com/document/Dyplsapi/2017-05-25/UpdateAxnBindFixedLine) operation to modify it.
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
   * Number N of the fixed-line AXN privacy number.
   * 
   * @example
   * 155****2222
   */
  telB?: string;
  /**
   * @remarks
   * Number X of the fixed-line AXN privacy number. Number X is the privacy number that you have purchased in the console.
   * 
   * > This parameter is required in the mode where the customer specifies number X (that is, the BindType parameter is set to mode101).
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
      extra: BindAxnFixedLineRequestExtra,
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

