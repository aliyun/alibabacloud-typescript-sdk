// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigXShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the call capability. Valid values:
   * 
   * - 0: Disable.
   * 
   * - 1: Enable.
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1898871967585852
   */
  callerParentId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * Specifies whether to pass through the caller ID to display the actual caller. Valid values:
   * 
   * - 00: No pass-through. The work number is displayed when either party calls the other.
   * 
   * - 10: Pass-through. When Customer A is the caller, the caller ID displayed to Employee B is the number of Customer A. When Employee B is the caller, the caller ID displayed to Customer A is the work number.
   * 
   * Default value: 00.
   * 
   * @example
   * 0
   */
  GNFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request deduplication ID. The maximum length of reqId is 20 characters. The caller must ensure atomicity.
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The sequential ringing control parameters.
   */
  sequenceCallsShrink?: string;
  /**
   * @remarks
   * The sequential ringing mode. Valid values:
   * 
   * - 0: No sequential ringing. This is the default value.
   * 
   * - 1: Conditional sequential ringing. The system first connects to the callee specified by calledNo. If the callee cannot be connected, the system sequentially rings the numbers in the sequenceCalls list.
   * 
   * - 2: Unconditional sequential ringing. The system does not connect to the callee specified by calledNo and directly sequentially rings the numbers in the sequenceCalls list.
   * 
   * @example
   * 0
   */
  sequenceMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the SMS feature. Valid values:
   * 
   * - 0: Disable.
   * 
   * - 1: Enable.
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * Specifies whether to pass through the SMS signature to display the actual user. Valid values:
   * 
   * - 0: No pass-through.
   * 
   * - 1: Pass-through.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * The X number.
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      GNFlag: 'GNFlag',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sequenceCallsShrink: 'SequenceCalls',
      sequenceMode: 'SequenceMode',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      GNFlag: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sequenceCallsShrink: 'string',
      sequenceMode: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

