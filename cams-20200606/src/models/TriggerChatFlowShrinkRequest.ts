// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerChatFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The declared occurrence time of the event, usually the time when the request was constructed, in milliseconds timestamp.
   * 
   * @example
   * 1731502129000
   */
  claimTimeMillis?: number;
  /**
   * @remarks
   * Input parameters in Key-Value format. The Key must match the input strategy configured at the start node of your flow.
   * 
   * @example
   * {"my_biz_data_0": "hi", "my_biz_data_1": "1024"}
   */
  dataShrink?: string;
  /**
   * @remarks
   * The time when the event should be discarded, i.e., the expiration time. If this field is specified, the message will be discarded if it exceeds this time, in milliseconds timestamp.
   * 
   * @example
   * 1731502729000
   */
  discardTimeMillis?: number;
  /**
   * @remarks
   * Flow code.
   * 
   * This parameter is required.
   * 
   * @example
   * f4912c16943b4dfba44bd6fedacf8c70
   */
  flowCode?: string;
  /**
   * @remarks
   * External system transaction number, used to associate with external business system transactions. You can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * 8d4acf7e-e360-eb83-6d74-fcf9c4538fda
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Unique event ID used for idempotent triggers. Do not include any business semantics; you can retrieve this parameter within the flow after triggering.
   * 
   * @example
   * c68622e6-5f0d-c8a4-af41-e949c2a7580e
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      claimTimeMillis: 'ClaimTimeMillis',
      dataShrink: 'Data',
      discardTimeMillis: 'DiscardTimeMillis',
      flowCode: 'FlowCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimTimeMillis: 'number',
      dataShrink: 'string',
      discardTimeMillis: 'number',
      flowCode: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

