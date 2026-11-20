// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxnExtensionBindFixedLineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The announcement code for the caller side. This parameter is required for the AXB service. It must contain codes for three scenarios. Specify the codes in the order of "B->X, A->X, and other numbers->X", separated by commas.
   * 
   * > "1,2,3" indicates that the announcement code for B->X is 1, the announcement code for A->X is 2, and the announcement code for other numbers->X is 3.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The announcement code for the callee side after the call is connected. It must contain codes for two scenarios. Specify the codes in the order of "A as callee and B as callee", separated by commas.
   * 
   * > "1,2" indicates that the announcement code when number A answers as the callee is 1, and the announcement code when number B answers as the callee is 2.
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
   * - Other values: If you specify another value, such as 60, the binding is valid for 60 seconds after number X is allocated. After 60 seconds, the binding is automatically unbound.
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * The extension parameters.
   */
  extraaxxShrink?: string;
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
   * The binding time. Format: yyyyMMddHHmmss. The time is in UTC+8 and uses the 24-hour format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The announcement code for the caller side after the call is connected. It must contain codes for two scenarios. Specify the codes in the order of "A as callee and B as callee", separated by commas.
   * 
   * > "1,2" indicates that the announcement code for the caller side when number A is the callee is 1, and the announcement code for the caller side when number B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * The number A of the landline AXN extension.
   * 
   * > Number A can be set to a mobile phone number or a landline number. For a landline number, the area code must be included, and no hyphen is required between the area code and the number.
   * 
   * This parameter is required.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Landline number: 0571******36
   */
  telA?: string;
  /**
   * @remarks
   * The business timestamp. Format: yyyyMMddHHmmssSSS. The time is in UTC+8 and uses the 24-hour format, accurate to milliseconds.
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
      extraaxxShrink: 'Extraaxx',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      expiration: 'string',
      extraaxxShrink: 'string',
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
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

