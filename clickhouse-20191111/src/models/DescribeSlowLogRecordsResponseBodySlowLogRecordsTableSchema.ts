// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet } from "./DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet";


export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema extends $dara.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet },
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

