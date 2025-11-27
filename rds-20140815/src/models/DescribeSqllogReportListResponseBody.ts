// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $dara.Model {
  /**
   * @remarks
   * The average time that is required to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 500
   */
  avgLatency?: number;
  /**
   * @remarks
   * The number of times that the SQL statement is executed.
   * 
   * @example
   * 5
   */
  SQLExecuteTimes?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * >  Only the first 128 characters of the SQL statement are returned. In addition, only the SQL statements that take more than 100 ms to execute are returned.
   * 
   * @example
   * SELECT * FROM table_name;
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      avgLatency: 'AvgLatency',
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLatency: 'number',
      SQLExecuteTimes: 'number',
      SQLText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $dara.Model {
  /**
   * @remarks
   * The number of times that the SQL statement is executed.
   * 
   * @example
   * 5
   */
  SQLExecuteTimes?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * >  Only the first 128 characters of the SQL statement are returned. In addition, only the SQL statements that take more than 5 ms to execute are returned.
   * 
   * @example
   * SELECT * FROM table_name;
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExecuteTimes: 'number',
      SQLText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeSQLLogReportListResponseBodyItems extends $dara.Model {
  item?: DescribeSQLLogReportListResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of SQL log reports.
   */
  items?: DescribeSQLLogReportListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of SQL log reports on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 60
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSQLLogReportListResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

