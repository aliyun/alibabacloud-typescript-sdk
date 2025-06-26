// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs } from "./DescribeDbinstanceConfigChangeLogResponseBodyDataParamChangeLogs";


export class DescribeDBInstanceConfigChangeLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  paramChangeLogs?: DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      paramChangeLogs: 'ParamChangeLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      paramChangeLogs: { 'type': 'array', 'itemType': DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs },
    };
  }

  validate() {
    if(Array.isArray(this.paramChangeLogs)) {
      $dara.Model.validateArray(this.paramChangeLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

