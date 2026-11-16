// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerChatFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the event is declared to occur, which is the time when the flow is triggered. This is generally the time when the request is constructed. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1731502129000
   */
  claimTimeMillis?: number;
  /**
   * @remarks
   * The input parameters in key-value format. The keys must match the input parameter policy that you configured for the start node of the flow. To view the variable names of the start node, click the name of the flow with a manual trigger in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) console to go to the canvas orchestration page.
   * 
   * @example
   * {
   *   "my_biz_data_0": "hi",
   *   "my_biz_data_1": "1024"
   * }
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The time when the event is declared to be discarded, which is the expiration time for triggering the flow. If this field is specified and the response time after the request is initiated exceeds this time, the flow trigger is canceled. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1731502729000
   */
  discardTimeMillis?: number;
  /**
   * @remarks
   * The flow code. You can view the flow code in the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) console.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The custom serial number of the external system. This parameter is used to associate the serial number of the external business system. After the flow is triggered, you can obtain this parameter in the flow.
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
   * The custom unique ID of the event. This parameter is used to ensure idempotence for the trigger. Do not include any business semantics in this parameter. After the flow is triggered, you can obtain this parameter in the flow.
   * 
   * @example
   * c68622e6-5f0d-c8a4-af41-e949c2a7580e
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      claimTimeMillis: 'ClaimTimeMillis',
      data: 'Data',
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

