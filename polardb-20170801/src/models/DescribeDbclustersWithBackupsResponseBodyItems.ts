// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersWithBackupsResponseBodyItemsDBCluster } from "./DescribeDbclustersWithBackupsResponseBodyItemsDbcluster";


export class DescribeDBClustersWithBackupsResponseBodyItems extends $dara.Model {
  DBCluster?: DescribeDBClustersWithBackupsResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersWithBackupsResponseBodyItemsDBCluster },
    };
  }

  validate() {
    if(Array.isArray(this.DBCluster)) {
      $dara.Model.validateArray(this.DBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

