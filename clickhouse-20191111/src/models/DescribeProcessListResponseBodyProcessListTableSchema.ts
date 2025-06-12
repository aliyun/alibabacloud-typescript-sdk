// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessListResponseBodyProcessListTableSchemaResultSet } from "./DescribeProcessListResponseBodyProcessListTableSchemaResultSet";


export class DescribeProcessListResponseBodyProcessListTableSchema extends $dara.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListTableSchemaResultSet },
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

