// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxbBindFixedLineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The caller-side audio playback code. This parameter is required for the AXB privacy number service for landlines. The audio playback code must include codes for three scenarios. Specify the codes in the order of "B->X, A->X, and other numbers->X", and separate the codes with commas.
   * 
   * > "1,2,3" indicates that the audio playback code for B->X is 1, the code for A->X is 2, and the code for other numbers->X is 3.
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * The callee-side audio playback code after the call is connected. The callee-side audio playback code must include codes for two scenarios. Specify the codes in the order of "A as the callee and B as the callee", and separate the codes with commas.
   * 
   * > "1,2" indicates that the audio playback code when Number A answers as the callee is 1, and the code when Number B answers as the callee is 2.
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
   * - 0: The binding never expires.
   * 
   * - Other values: If you specify another value, such as 60, the binding is valid for 60 seconds after Number X is allocated. After 60 seconds, the binding is automatically unbound.
   * 
   * @example
   * 10
   */
  expiration?: string;
  /**
   * @remarks
   * The extension parameters.
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
   * A100***************
   */
  subId?: string;
  /**
   * @remarks
   * The binding time. The format is yyyyMMddHHmmss. The time is in UTC+8 and uses the 24-hour format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116
   */
  subts?: string;
  /**
   * @remarks
   * The caller-side audio playback code after the call is connected. The caller-side audio playback code after connection must include codes for two scenarios. Specify the codes in the order of "A as the callee and B as the callee", and separate the codes with commas.
   * 
   * > "1,2" indicates that the caller-side audio playback code when Number A is the callee is 1, and the caller-side audio playback code when Number B is the callee is 2.
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * Sets Number A in the binding relationship.
   * 
   * 
   * > - Number A can be set to a mobile phone number or a landline number. If it is a landline number, you must add the area code. No hyphen is required between the area code and the number.
   * > - You cannot update TelA and TelB at the same time.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Landline number: 0571******36
   */
  telA?: string;
  /**
   * @remarks
   * Sets Number B in the binding relationship.
   * 
   * 
   * > - Number B can be set to a mobile phone number or a landline number. If it is a landline number, you must add the area code. No hyphen is required between the area code and the number.
   * > - You cannot update TelA and TelB at the same time.
   * 
   * @example
   * Mobile phone number: 182****2371
   * Landline number: 0571******36
   */
  telB?: string;
  /**
   * @remarks
   * The business timestamp. The format is yyyyMMddHHmmssSSS. The time is in UTC+8 and uses the 24-hour format. The precision is accurate to milliseconds.
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

