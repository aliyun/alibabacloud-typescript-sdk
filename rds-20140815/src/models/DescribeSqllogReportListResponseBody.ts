// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $dara.Model {
  avgLatency?: number;
  SQLExecuteTimes?: number;
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
  SQLExecuteTimes?: number;
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
  latencyTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems;
  QPSTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems;
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
  items?: DescribeSQLLogReportListResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
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

