// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackendServersRequest extends $dara.Model {
  /**
   * @remarks
   * The backend servers that you want to remove.
   * 
   * *   **ServerId**: The IDs of the backend servers. Set the value to a string. This parameter is required.
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): Elastic Compute Service (ECS) instance
   *     *   **eni**: elastic network interface (ENI)
   *     *   **eci**: elastic container instance
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Set the value to an integer.
   * 
   * You can specify at most 20 backend servers in each call. Examples:
   * 
   * *   Remove ECS instances:
   * 
   * `[{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]`
   * 
   * *   Remove ENIs:
   * 
   * `[{"ServerId":"eni-2ze1sdp5****","Type": "eni","Weight":"100"}]`
   * 
   * *   Remove elastic container instances:
   * 
   * `[{"ServerId":"eci-2ze1sdp5****","Type": "eci","Weight":"100"}]`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]
   */
  backendServers?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp15lbk8uja8rvm4a****
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: 'string',
      loadBalancerId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

