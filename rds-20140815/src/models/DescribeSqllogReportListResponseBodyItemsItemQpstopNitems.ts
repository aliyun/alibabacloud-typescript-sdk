// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem } from "./DescribeSqllogReportListResponseBodyItemsItemQpstopNitemsQpstopNitem";


export class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems extends $dara.Model {
  QPSTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem[];
  static names(): { [key: string]: string } {
    return {
      QPSTopNItem: 'QPSTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QPSTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem },
    };
  }

  validate() {
    if(Array.isArray(this.QPSTopNItem)) {
      $dara.Model.validateArray(this.QPSTopNItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

