// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray } from "./DescribeDbclusterAccessWhitelistResponseBodyItemsDbclusterIparray";


export class DescribeDBClusterAccessWhitelistResponseBodyItems extends $dara.Model {
  DBClusterIPArray?: DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArray: 'DBClusterIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterIPArray)) {
      $dara.Model.validateArray(this.DBClusterIPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

