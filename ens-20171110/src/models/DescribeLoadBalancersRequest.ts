// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The service address of the load balancing instance.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-guangzhou-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The list of ENS edge zone IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the load balancing instance.
   * 
   * @example
   * lb-5q73cv04zeyh43lh74lp4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the load balancing instance.
   * 
   * @example
   * example
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The listener status of the load balancing instance. Valid values:
   * - **Active**: The listeners in the instance can accept and forward traffic based on rules.
   * - **InActive**: The listeners in the instance no longer accept and forward traffic.
   * 
   * @example
   * InActive
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the load balancing instance.
   * 
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The network ID.
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
   * The Settings for the number of entries per page for paging in a paged query. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The backend server instance ID.
   * 
   * @example
   * i-5f67ffjc004wwz0t****
   */
  serverId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
      loadBalancerType: 'LoadBalancerType',
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
      loadBalancerType: 'string',
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

