// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnExtensionFixedLineRequestExtraaxx extends $dara.Model {
  /**
   * @remarks
   * Callback control. When A calls through X, that is, A dials X as the caller. Valid values:
   * 
   * - 0 (default): Cannot make outbound calls.
   * 
   * - 1: Connect to the most recent N number.
   * 
   * - 2: Call back the fixed number TelB.
   * 
   * @example
   * 0
   */
  callback?: string;
  /**
   * @remarks
   * Recording control. Valid values:
   * 
   * - 0 (default): No recording.
   * 
   * - 1: Recording.
   * 
   * > After you enable the call recording feature, you can play and download audio files in the call records. Recording files are billed at CNY 0.010/minute.
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

export class BindAxnExtensionFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * Caller-side ringtone code. This parameter is required for AXB scenarios. Must contain codes for 3 scenarios. Enter the codes in the order of "B->X, A->X, other numbers->X", separated by commas.
   * 
   * > "1,2,3" indicates that the ringtone code for B->X is 1, for A->X is 2, and for other numbers->X is 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * Called-side ringtone code after connection. Must contain codes for 2 scenarios. Enter the codes in the order of "A as called party, B as called party", separated by commas.
   * 
   * > "1,2" indicates that the ringtone code when A is the called party is 1, and the ringtone code when B is the called party is 2.
   * 
   * @example
   * 1,2
   */
  anucodecalled?: string;
  /**
   * @remarks
   * Number pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  appId?: string;
  /**
   * @remarks
   * Area code. Supports specifying the home location of the X number (specified city -> provincial capital -> nationwide routing). If no home location is specified, a number is randomly assigned nationwide.
   * 
   * @example
   * 0571
   */
  areacode?: string;
  /**
   * @remarks
   * Binding type. Valid values:
   * 
   * - mode101: Customer specifies the X number.
   * 
   * - mode102: Platform assigns the X number.
   * 
   * This parameter is required.
   * 
   * @example
   * mode101
   */
  bindType?: string;
  /**
   * @remarks
   * Expiration time. Unit: seconds. Valid values:
   * 
   * - 0: Never expires.
   * 
   * - Other values: When other values are specified, such as 60, the binding is valid for 60 seconds after the X number is successfully assigned. After 60 seconds, the binding is automatically released.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * Extension parameters.
   */
  extraaxx?: BindAxnExtensionFixedLineRequestExtraaxx;
  /**
   * @remarks
   * Unique identifier of the message request.
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
   * External business extension field. This parameter is returned in call record receipt messages. Must not exceed 100 characters.
   * 
   * @example
   * 19394
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Binding time. Format: yyyyMMddHHmmss. Uses Beijing time, 24-hour clock.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * Caller-side ringtone code after connection. Must contain codes for 2 scenarios. Enter the codes in the order of "A as called party, B as called party", separated by commas.
   * 
   * > "1,2" indicates that the caller-side ringtone code when A is the called party is 1, and the caller-side ringtone code when B is the called party is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The A number for the fixed-line AXN extension number.
   * 
   * > The A number can be set to a mobile number or a fixed-line number. Fixed-line numbers must include the area code, and no hyphen is needed between the area code and the number.
   * 
   * This parameter is required.
   * 
   * @example
   * Mobile: 182****2371
   * Fixed line: 0571******36
   */
  telA?: string;
  /**
   * @remarks
   * The X number for the fixed-line AXN extension number. The X number is a privacy number that you have [purchased](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * 
   * @example
   * 0571******23
   */
  telX?: string;
  /**
   * @remarks
   * Extension number. This parameter is required when the BindType parameter is set to mode101.
   * 
   * @example
   * 1009
   */
  telXext?: string;
  /**
   * @remarks
   * Business timestamp. Format: yyyyMMddHHmmssSSS. Uses Beijing time, 24-hour clock, accurate to milliseconds.
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
      extraaxx: 'Extraaxx',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telX: 'TelX',
      telXext: 'TelXext',
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
      extraaxx: BindAxnExtensionFixedLineRequestExtraaxx,
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telX: 'string',
      telXext: 'string',
      ts: 'string',
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

