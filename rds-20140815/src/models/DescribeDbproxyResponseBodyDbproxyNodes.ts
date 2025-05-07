// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes } from "./DescribeDbproxyResponseBodyDbproxyNodesDbproxyNodes";


export class DescribeDBProxyResponseBodyDBProxyNodes extends $dara.Model {
  DBProxyNodes?: DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes[];
  static names(): { [key: string]: string } {
    return {
      DBProxyNodes: 'DBProxyNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes },
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

