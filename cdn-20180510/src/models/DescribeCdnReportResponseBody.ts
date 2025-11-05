// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnReportResponseBodyContentDataDeliverReport extends $dara.Model {
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
   * test
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

export class DescribeCdnReportResponseBodyContentDataDeliver extends $dara.Model {
  report?: DescribeCdnReportResponseBodyContentDataDeliverReport;
  static names(): { [key: string]: string } {
    return {
      report: 'report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: DescribeCdnReportResponseBodyContentDataDeliverReport,
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

export class DescribeCdnReportResponseBodyContentData extends $dara.Model {
  data?: { [key: string]: string }[];
  deliver?: DescribeCdnReportResponseBodyContentDataDeliver;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      deliver: 'deliver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      deliver: DescribeCdnReportResponseBodyContentDataDeliver,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.deliver && typeof (this.deliver as any).validate === 'function') {
      (this.deliver as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnReportResponseBodyContent extends $dara.Model {
  data?: DescribeCdnReportResponseBodyContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCdnReportResponseBodyContentData },
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

export class DescribeCdnReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the operations report.
   * 
   * @example
   * "data":[{"deliver":{"report":{"title":"TopUrlByAcc","format":"table","shape":"","header":["url","traf","traf_rate","acc","acc_rate"]}},"data":[{"acc":440,"acc_rate":"0.200%","traf":22,"url":"http://demo.com","traf_rate":"0.100%"},{"acc":440,"acc_rate":"0.200%","traf":22,"url":"http://demo.com","traf_rate":"0.100%"}]}]}}
   */
  content?: DescribeCdnReportResponseBodyContent;
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
      content: DescribeCdnReportResponseBodyContent,
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

