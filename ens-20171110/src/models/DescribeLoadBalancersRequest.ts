// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that the ELB instance uses to provide services.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-guangzhou-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of the Edge Node Service (ENS) nodes.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5q73cv04zeyh43lh74lp4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * example
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the listener for the ELB instance. Valid values:
   * 
   * *   **Active**: The listener for the instance can forward the received traffic based on forwarding rules.
   * *   **InActive**: The listener for the instance does not forward the received traffic.
   * 
   * @example
   * InActive
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5s9ayrxsd9hszrlt5fgv2****
   */
  networkId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-5f67ffjc004wwz0t****
   */
  serverId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5sy773iy25rulsmgskmba****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serverId: 'ServerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serverId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

