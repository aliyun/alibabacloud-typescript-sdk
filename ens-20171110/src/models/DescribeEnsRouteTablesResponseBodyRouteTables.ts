// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRouteTablesResponseBodyRouteTables extends $dara.Model {
  /**
   * @remarks
   * The type of the resource with which the route table is associated. Valid values:
   * 
   * *   **VSwitch**
   * *   **Gateway**
   * 
   * @example
   * VSwitch
   */
  associateType?: string;
  /**
   * @remarks
   * The time when the route table was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-08T08:35:18Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-15
   */
  ensRegionId?: string;
  /**
   * @remarks
   * Specifies whether it is the default gateway route table.
   * 
   * @example
   * false
   */
  isDefaultGatewayRouteTable?: boolean;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5v9lufsezl4g****
   */
  networkId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * rt-5xde2bit9****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table that you want to query.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test-tf-vtb7
   */
  routeTableName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   Available: The route table is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the route table. Examples:
   * 
   * *   Custom: custom route table.
   * *   System: system route table.
   * 
   * @example
   * System
   */
  type?: string;
  /**
   * @remarks
   * The vSwitches that are associated with the route table.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      isDefaultGatewayRouteTable: 'IsDefaultGatewayRouteTable',
      networkId: 'NetworkId',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      status: 'Status',
      type: 'Type',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      isDefaultGatewayRouteTable: 'boolean',
      networkId: 'string',
      routeTableId: 'string',
      routeTableName: 'string',
      status: 'string',
      type: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

