// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeDbclusterNodesDbclusterNode";


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes extends $dara.Model {
  DBClusterNode?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode[];
  static names(): { [key: string]: string } {
    return {
      DBClusterNode: 'DBClusterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterNode: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterNode)) {
      $dara.Model.validateArray(this.DBClusterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

