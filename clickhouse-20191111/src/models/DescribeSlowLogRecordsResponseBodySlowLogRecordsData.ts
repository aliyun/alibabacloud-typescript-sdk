// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet } from "./DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet";


export class DescribeSlowLogRecordsResponseBodySlowLogRecordsData extends $dara.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet },
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

