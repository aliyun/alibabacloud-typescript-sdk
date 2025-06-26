// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceConfigResponseBodyDataParams } from "./DescribeDbinstanceConfigResponseBodyDataParams";


export class DescribeDBInstanceConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  params?: DescribeDBInstanceConfigResponseBodyDataParams[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      params: { 'type': 'array', 'itemType': DescribeDBInstanceConfigResponseBodyDataParams },
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

