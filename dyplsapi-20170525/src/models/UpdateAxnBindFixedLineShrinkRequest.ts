// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxnBindFixedLineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The prompt code for the caller side. This parameter is required for AXB services. The codes must include three scenarios. Enter the codes in the order of B->X, A->X, and other numbers->X, separated by commas.
   * 
   * > 1,2,3 indicates that the prompt code for B->X is 1, the prompt code for A->X is 2, and the prompt code for other numbers->X is 3.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The prompt code for the callee side after the call is connected. The codes must include two scenarios. Enter the codes in the order of A as callee and B as callee, separated by commas.
   * 
   * > 1,2 indicates that the prompt code when A is the callee is 1, and the prompt code when B is the callee is 2.
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
   * The expiration time. Unit: seconds. Valid values:
   * 
   * - 0: Never expires.
   * 
   * - Other values: If you specify another value, such as 60, the binding is valid for 60 seconds after the number X is allocated. After 60 seconds, the binding is automatically unbound.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extended parameters.
   */
  extraShrink?: string;
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
   * The external business extension field. This parameter is returned in the call record receipt message. The maximum length is 100 characters.
   * 
   * @example
   * 19394
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * GHX0*************************
   */
  subId?: string;
  /**
   * @remarks
   * The binding time. The format is yyyyMMddHHmmss. The time is in UTC+8 and uses a 24-hour clock.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The prompt code for the caller side after the call is connected. The codes must include two scenarios. Enter the codes in the order of A as callee and B as callee, separated by commas.
   * 
   * > 1,2 indicates that the prompt code for the caller side when A is the callee is 1, and the prompt code for the caller side when B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The number A of the landline AXN privacy number.
   * 
   * > You can set number A to a mobile phone number or a landline number. If you use a landline number, you must include the area code. Do not add a hyphen between the area code and the phone number.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Landline number: 0571******36
   */
  telA?: string;
  /**
   * @remarks
   * The number N of the landline AXN privacy number.
   * 
   * @example
   * 155****2222
   */
  telB?: string;
  /**
   * @remarks
   * The business timestamp. The format is yyyyMMddHHmmssSSS. The time is in UTC+8 and uses a 24-hour clock, accurate to milliseconds.
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
      expiration: 'Expiration',
      extraShrink: 'Extra',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      expiration: 'string',
      extraShrink: 'string',
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
      ts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

