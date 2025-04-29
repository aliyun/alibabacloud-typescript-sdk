// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcResponseBody extends $dara.Model {
  requestId?: string;
  routeTableId?: string;
  VRouterId?: string;
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

