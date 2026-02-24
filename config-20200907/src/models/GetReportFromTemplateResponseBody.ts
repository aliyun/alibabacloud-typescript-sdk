// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportFromTemplateResponseBodyTemplateReport extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1478085326082xxx
   */
  accountId?: number;
  /**
   * @remarks
   * The timestamp when the report was generated. Unit: milliseconds.
   * 
   * @example
   * 1763540426815
   */
  reportCreateEndTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the report started to be generated. Unit: milliseconds.
   * 
   * @example
   * 1763540421815
   */
  reportCreateStartTimestamp?: number;
  /**
   * @remarks
   * The ID of the report template.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @remarks
   * The download URL of the report.
   * 
   * @example
   * https://xxx
   */
  reportUrl?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * - COMPLETE: The report is generated.
   * 
   * - CREATING: The report is being generated.
   * 
   * - FAILED: The report failed to be generated.
   * 
   * - TIMEOUT: The request timed out.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the report generated from the template.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * DE9FFFE5-FCAD-4B24-9546-BF49273C562B
   */
  requestId?: string;
  /**
   * @remarks
   * The report generated from the template.
   */
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

