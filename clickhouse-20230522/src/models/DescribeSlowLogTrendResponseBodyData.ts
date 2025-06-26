// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogTrendResponseBodyDataResultSet } from "./DescribeSlowLogTrendResponseBodyDataResultSet";


export class DescribeSlowLogTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * clusterTest
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The result sets.
   */
  resultSet?: DescribeSlowLogTrendResponseBodyDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodyDataResultSet },
    };
  }

  validate() {
    if(Array.isArray(this.resultSet)) {
      $dara.Model.validateArray(this.resultSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

