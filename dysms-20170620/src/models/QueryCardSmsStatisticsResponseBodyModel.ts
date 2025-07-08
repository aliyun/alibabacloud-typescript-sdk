// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCardSmsStatisticsResponseBodyModelRecords } from "./QueryCardSmsStatisticsResponseBodyModelRecords";


export class QueryCardSmsStatisticsResponseBodyModel extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  records?: QueryCardSmsStatisticsResponseBodyModelRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryCardSmsStatisticsResponseBodyModelRecords },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

