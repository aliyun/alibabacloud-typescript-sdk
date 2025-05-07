// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance } from "./DescribeDbinstancesByPerformanceResponseBodyItemsDbinstancePerformance";


export class DescribeDBInstancesByPerformanceResponseBodyItems extends $dara.Model {
  DBInstancePerformance?: DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance[];
  static names(): { [key: string]: string } {
    return {
      DBInstancePerformance: 'DBInstancePerformance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstancePerformance: { 'type': 'array', 'itemType': DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstancePerformance)) {
      $dara.Model.validateArray(this.DBInstancePerformance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

