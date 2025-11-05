// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnReportListResponseBodyContentDataDeliverReport extends $dara.Model {
  /**
   * @example
   * table
   */
  format?: string;
  header?: string[];
  /**
   * @example
   * 0
   */
  outLine?: number;
  /**
   * @example
   * 0
   */
  outSize?: number;
  /**
   * @example
   * line
   */
  shape?: string;
  /**
   * @example
   * TopUrlByAcc
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      header: 'header',
      outLine: 'outLine',
      outSize: 'outSize',
      shape: 'shape',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      header: { 'type': 'array', 'itemType': 'string' },
      outLine: 'number',
      outSize: 'number',
      shape: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.header)) {
      $dara.Model.validateArray(this.header);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportListResponseBodyContentDataDeliver extends $dara.Model {
  report?: DescribeCdnReportListResponseBodyContentDataDeliverReport;
  static names(): { [key: string]: string } {
    return {
      report: 'report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: DescribeCdnReportListResponseBodyContentDataDeliverReport,
    };
  }

  validate() {
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportListResponseBodyContentData extends $dara.Model {
  deliver?: DescribeCdnReportListResponseBodyContentDataDeliver;
  /**
   * @example
   * 1
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      deliver: 'deliver',
      reportId: 'reportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliver: DescribeCdnReportListResponseBodyContentDataDeliver,
      reportId: 'number',
    };
  }

  validate() {
    if(this.deliver && typeof (this.deliver as any).validate === 'function') {
      (this.deliver as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportListResponseBodyContent extends $dara.Model {
  data?: DescribeCdnReportListResponseBodyContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCdnReportListResponseBodyContentData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the report that is queried.
   * 
   * @example
   * "data":[{"reportId":1,"deliver":{"report":{"title":"DomainPvUv","format":"chart","shape":"line","xAxis":"ds","yAxis":"cnt","legend":"cnt_type","header":["ds","cnt_type","cnt"]}}}
   */
  content?: DescribeCdnReportListResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeCdnReportListResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

