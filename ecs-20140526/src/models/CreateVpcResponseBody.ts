// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the route table automatically created for the VPC.
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the virtual router automatically created for the VPC.
   */
  VRouterId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeTableId: 'RouteTableId',
      VRouterId: 'VRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeTableId: 'string',
      VRouterId: 'string',
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

