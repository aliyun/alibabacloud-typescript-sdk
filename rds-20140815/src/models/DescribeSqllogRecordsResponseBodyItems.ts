// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogRecordsResponseBodyItemsSQLRecord } from "./DescribeSqllogRecordsResponseBodyItemsSqlrecord";


export class DescribeSQLLogRecordsResponseBodyItems extends $dara.Model {
  SQLRecord?: DescribeSQLLogRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeSQLLogRecordsResponseBodyItemsSQLRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLRecord)) {
      $dara.Model.validateArray(this.SQLRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

