// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExportCardSmsHistoryResponseBodyModelRecords } from "./ExportCardSmsHistoryResponseBodyModelRecords";


export class ExportCardSmsHistoryResponseBodyModel extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  records?: ExportCardSmsHistoryResponseBodyModelRecords[];
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
      records: { 'type': 'array', 'itemType': ExportCardSmsHistoryResponseBodyModelRecords },
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

