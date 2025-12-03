// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719dfa08e******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The state of the CLB instance. Valid values: **active** and **inactive**.
   * 
   * *   **active** (default)
   * 
   *     If a CLB instance is in the **active** state, listeners of the CLB instance can forward traffic based on forwarding rules.
   * 
   *     By default, newly created CLB instances are in the **active** state.
   * 
   * *   **inactive**
   * 
   *     If a CLB instance is in the **inactive** state, listeners of the CLB instance do not forward traffic.
   * 
   * >  If all listeners of a CLB instance are deleted, the CLB instance automatically switches to the **inactive** state.
   * 
   * This parameter is required.
   * 
   * @example
   * active
   */
  loadBalancerStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can query region IDs from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
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

