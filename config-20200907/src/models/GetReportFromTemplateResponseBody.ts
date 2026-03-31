// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportFromTemplateResponseBodyTemplateReport extends $dara.Model {
  /**
   * @example
   * 1478085326082xxx
   */
  accountId?: number;
  /**
   * @example
   * 1763540426815
   */
  reportCreateEndTimestamp?: number;
  /**
   * @example
   * 1763540421815
   */
  reportCreateStartTimestamp?: number;
  /**
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @example
   * https://xxx
   */
  reportUrl?: string;
  /**
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @example
   * crtr-xxx
   */
  templateReportId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      reportCreateEndTimestamp: 'ReportCreateEndTimestamp',
      reportCreateStartTimestamp: 'ReportCreateStartTimestamp',
      reportTemplateId: 'ReportTemplateId',
      reportUrl: 'ReportUrl',
      status: 'Status',
      templateReportId: 'TemplateReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      reportCreateEndTimestamp: 'number',
      reportCreateStartTimestamp: 'number',
      reportTemplateId: 'string',
      reportUrl: 'string',
      status: 'string',
      templateReportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportFromTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * DE9FFFE5-FCAD-4B24-9546-BF49273C562B
   */
  requestId?: string;
  templateReport?: GetReportFromTemplateResponseBodyTemplateReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateReport: 'TemplateReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateReport: GetReportFromTemplateResponseBodyTemplateReport,
    };
  }

  validate() {
    if(this.templateReport && typeof (this.templateReport as any).validate === 'function') {
      (this.templateReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

