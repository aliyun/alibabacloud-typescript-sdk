// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys";
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableVswitchIds";


export class DescribeRouteTablesResponseBodyRouteTablesRouteTable extends $dara.Model {
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * @example
   * 2017-08-22T10:40:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route table belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the route.
   */
  routeEntrys?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vRouter ID.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      routeEntrys: 'RouteEntrys',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      status: 'Status',
      VRouterId: 'VRouterId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      resourceGroupId: 'string',
      routeEntrys: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys,
      routeTableId: 'string',
      routeTableType: 'string',
      status: 'string',
      VRouterId: 'string',
      vSwitchIds: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds,
    };
  }

  validate() {
    if(this.routeEntrys && typeof (this.routeEntrys as any).validate === 'function') {
      (this.routeEntrys as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

