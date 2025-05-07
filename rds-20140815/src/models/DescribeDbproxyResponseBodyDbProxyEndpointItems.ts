// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems } from "./DescribeDbproxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems";


export class DescribeDBProxyResponseBodyDbProxyEndpointItems extends $dara.Model {
  dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointItems: 'DbProxyEndpointItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems },
    };
  }

  validate() {
    if(Array.isArray(this.dbProxyEndpointItems)) {
      $dara.Model.validateArray(this.dbProxyEndpointItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

