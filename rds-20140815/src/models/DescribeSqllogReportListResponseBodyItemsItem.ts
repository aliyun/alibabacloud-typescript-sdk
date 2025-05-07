// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems } from "./DescribeSqllogReportListResponseBodyItemsItemLatencyTopNitems";
import { DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems } from "./DescribeSqllogReportListResponseBodyItemsItemQpstopNitems";


export class DescribeSQLLogReportListResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * An array that consists of SQL statements executed with the highest latency.
   */
  latencyTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems;
  /**
   * @remarks
   * An array that consists of SQL statements executed the most frequently.
   */
  QPSTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems;
  /**
   * @remarks
   * The time when the report was generated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-27T16:00:00Z
   */
  reportTime?: string;
  static names(): { [key: string]: string } {
    return {
      latencyTopNItems: 'LatencyTopNItems',
      QPSTopNItems: 'QPSTopNItems',
      reportTime: 'ReportTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyTopNItems: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems,
      QPSTopNItems: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems,
      reportTime: 'string',
    };
  }

  validate() {
    if(this.latencyTopNItems && typeof (this.latencyTopNItems as any).validate === 'function') {
      (this.latencyTopNItems as any).validate();
    }
    if(this.QPSTopNItems && typeof (this.QPSTopNItems as any).validate === 'function') {
      (this.QPSTopNItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

