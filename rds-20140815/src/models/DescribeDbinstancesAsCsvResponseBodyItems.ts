// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute } from "./DescribeDbinstancesAsCsvResponseBodyItemsDbinstanceAttribute";


export class DescribeDBInstancesAsCsvResponseBodyItems extends $dara.Model {
  DBInstanceAttribute?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAttribute)) {
      $dara.Model.validateArray(this.DBInstanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

