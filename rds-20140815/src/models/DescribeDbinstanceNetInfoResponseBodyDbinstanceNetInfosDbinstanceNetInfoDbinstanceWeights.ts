// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosDbinstanceNetInfoDbinstanceWeightsDbinstanceWeight";


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
  DBInstanceWeight?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceWeight)) {
      $dara.Model.validateArray(this.DBInstanceWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

