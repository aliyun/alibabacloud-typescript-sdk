// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteTableRequest extends $dara.Model {
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  routeTableName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      regionId: 'RegionId',
      routeTableName: 'RouteTableName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      regionId: 'string',
      routeTableName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

