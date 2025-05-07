// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight } from "./DescribeDbinstanceNetInfoForChannelResponseBodyDbinstanceNetInfosDbinstanceNetInfoDbinstanceWeightsDbinstanceWeight";


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
  DBInstanceWeight?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
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

