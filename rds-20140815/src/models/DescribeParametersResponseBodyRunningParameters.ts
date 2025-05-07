// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyRunningParametersDBInstanceParameter } from "./DescribeParametersResponseBodyRunningParametersDbinstanceParameter";


export class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyRunningParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

