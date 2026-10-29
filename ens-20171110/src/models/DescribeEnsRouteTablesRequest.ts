// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRouteTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of resource associated with the route table. Valid values:
   * 
   * - **VSwitch**: vSwitch
   * - **Gateway**: gateway
   * 
   * @example
   * Gateway
   */
  associateType?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-5p1cifr72di****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * @example
   * tftest-nat04
   */
  routeTableName?: string;
  /**
   * @remarks
   * The SNAT type. Valid values:
   * - FullCone: full-cone NAT
   * 
   * @example
   * FullCone
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      routeTableId: 'string',
      routeTableName: 'string',
      type: 'string',
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

