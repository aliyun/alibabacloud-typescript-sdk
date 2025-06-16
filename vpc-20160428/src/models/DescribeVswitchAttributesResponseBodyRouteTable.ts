// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchAttributesResponseBodyRouteTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the route table that is associated with the vSwitch.
   * 
   * @example
   * vtb-bp145q7glnuzdv****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: 'string',
      routeTableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

