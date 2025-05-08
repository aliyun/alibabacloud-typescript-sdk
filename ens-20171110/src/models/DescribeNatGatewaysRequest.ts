// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-wuxi-9
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. You can specify 1 to 100 IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * test0
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The IDs of the NAT gateways. You can specify 1 to 100 IDs.
   */
  natGatewayIds?: string[];
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5rllcjb3ol6duzjdnbm1o****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      natGatewayIds: 'NatGatewayIds',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      natGatewayId: 'string',
      natGatewayIds: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.natGatewayIds)) {
      $dara.Model.validateArray(this.natGatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

