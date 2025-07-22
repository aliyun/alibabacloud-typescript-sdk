// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRouteTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routeTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

