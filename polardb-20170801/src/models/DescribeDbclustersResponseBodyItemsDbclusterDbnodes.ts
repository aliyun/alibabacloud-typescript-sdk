// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode } from "./DescribeDbclustersResponseBodyItemsDbclusterDbnodesDbnode";


export class DescribeDBClustersResponseBodyItemsDBClusterDBNodes extends $dara.Model {
  DBNode?: DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

