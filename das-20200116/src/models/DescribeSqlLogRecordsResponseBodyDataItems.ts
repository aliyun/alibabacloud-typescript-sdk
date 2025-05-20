// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord } from "./DescribeSqlLogRecordsResponseBodyDataItemsSqllogRecord";


export class DescribeSqlLogRecordsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The SQL log data.
   */
  SQLLogRecord?: DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLLogRecord: 'SQLLogRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLLogRecord: { 'type': 'array', 'itemType': DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLLogRecord)) {
      $dara.Model.validateArray(this.SQLLogRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

