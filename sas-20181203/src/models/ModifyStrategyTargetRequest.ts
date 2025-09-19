// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStrategyTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline check policy. The ID is returned after the policy is created. The value of this parameter is in the JSON format and contains the following field:
   * 
   * *   **strategyId**: the ID of the policy
   * 
   * This parameter is required.
   * 
   * @example
   * {"strategyId":8070645}
   */
  config?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The information about the asset group to which the policy is applied. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **TargetType**: the type of the asset to which the policy is applied. Set the value to **groupId**, which indicates that the policy is applied to an asset group.
   * *   **BindUuidCount**: the number of servers to which the policy is applied.
   * *   **Target**: the ID of the asset group.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Target":"9273980","BindUuidCount":5320,"TargetType":"groupId","Flag":"del"},{"Target":"9677606","TargetType":"groupId","Flag":"del"},{"Target":"10121607","BindUuidCount":7,"TargetType":"groupId","Flag":"add"},{"Target":"10670708","BindUuidCount":2,"TargetType":"groupId","Flag":"del"},{"Target":"11246338","BindUuidCount":6,"TargetType":"groupId","Flag":"del"},{"Target":"11291161","BindUuidCount":13,"TargetType":"groupId","Flag":"del"}]
   */
  target?: string;
  /**
   * @remarks
   * The type of the configuration. Set the value to **hc_strategy**.
   * 
   * This parameter is required.
   * 
   * @example
   * hc_strategy
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

