// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes } from "./DescribeDbproxyEndpointResponseBodyDbproxyNodesDbproxyNodes";


export class DescribeDBProxyEndpointResponseBodyDBProxyNodes extends $dara.Model {
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes[];
  static names(): { [key: string]: string } {
    return {
      DBProxyNodes: 'DBProxyNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

