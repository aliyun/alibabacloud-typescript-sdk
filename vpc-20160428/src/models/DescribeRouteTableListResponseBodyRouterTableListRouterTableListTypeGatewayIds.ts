// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds extends $dara.Model {
  gatewayIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gatewayIds: 'GatewayIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.gatewayIds)) {
      $dara.Model.validateArray(this.gatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

