// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems } from "./DescribeDbproxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems";


export class DescribeDBProxyEndpointResponseBodyEndpointConnectItems extends $dara.Model {
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems[];
  static names(): { [key: string]: string } {
    return {
      endpointConnectItems: 'EndpointConnectItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectItems: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems },
    };
  }

  validate() {
    if(Array.isArray(this.endpointConnectItems)) {
      $dara.Model.validateArray(this.endpointConnectItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

