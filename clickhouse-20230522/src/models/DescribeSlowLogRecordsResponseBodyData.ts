// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyDataResultSet } from "./DescribeSlowLogRecordsResponseBodyDataResultSet";


export class DescribeSlowLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z32****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * TestCluster
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The result sets.
   */
  resultSet?: DescribeSlowLogRecordsResponseBodyDataResultSet[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyDataResultSet },
      totalCount: 'number',
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

