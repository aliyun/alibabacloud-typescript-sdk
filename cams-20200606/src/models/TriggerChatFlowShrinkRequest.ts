// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerChatFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the event occurs. This is when the flow is triggered and is typically the time when the request is created. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1731502129000
   */
  claimTimeMillis?: number;
  /**
   * @remarks
   * The input parameters in a key-value format. The keys must match the input parameter policy configured in the start node of the flow. To view the variable names in the start node, go to the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder), click the name of the flow, and open the orchestration canvas.
   * 
   * @example
   * {
   *   "my_biz_data_0": "hi",
   *   "my_biz_data_1": "1024"
   * }
   */
  dataShrink?: string;
  /**
   * @remarks
   * The time when the event expires. If you specify this parameter, the trigger is canceled if the request is not processed before this time. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1731502729000
   */
  discardTimeMillis?: number;
  /**
   * @remarks
   * The code of the flow. View the flow code on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * A custom serial number from an external system. Use this parameter to associate the trigger with an external business process. After the flow is triggered, you can retrieve this parameter from within the flow.
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
   * A custom unique ID for the event, used to ensure idempotence. Do not include business semantics in the ID. After the flow is triggered, you can retrieve this parameter from within the flow.
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

