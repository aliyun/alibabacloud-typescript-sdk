// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpointsDbinstanceEndpointNodeItemsNodeItem";


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems extends $dara.Model {
  nodeItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem[];
  static names(): { [key: string]: string } {
    return {
      nodeItem: 'NodeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem },
    };
  }

  validate() {
    if(Array.isArray(this.nodeItem)) {
      $dara.Model.validateArray(this.nodeItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

