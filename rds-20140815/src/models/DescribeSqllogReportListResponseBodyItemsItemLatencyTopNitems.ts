// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem } from "./DescribeSqllogReportListResponseBodyItemsItemLatencyTopNitemsLatencyTopNitem";


export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems extends $dara.Model {
  latencyTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem[];
  static names(): { [key: string]: string } {
    return {
      latencyTopNItem: 'LatencyTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem },
    };
  }

  validate() {
    if(Array.isArray(this.latencyTopNItem)) {
      $dara.Model.validateArray(this.latencyTopNItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

