// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo } from "./DescribeDbinstanceHaconfigResponseBodyHostInstanceInfosNodeInfo";


export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos extends $dara.Model {
  nodeInfo?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

