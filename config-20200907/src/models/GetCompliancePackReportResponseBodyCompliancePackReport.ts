// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompliancePackReportResponseBodyCompliancePackReport extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the compliance package belongs.
   * 
   * @example
   * 120886317861****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The timestamp when the compliance evaluation report was generated. Unit: milliseconds.
   * 
   * @example
   * 1624329965857
   */
  reportCreateTimestamp?: number;
  /**
   * @remarks
   * The status of the compliance evaluation report. Valid values:
   * 
   * *   NONE: The compliance evaluation report is not generated.
   * *   CREATING: The compliance evaluation report is being generated.
   * *   COMPLETE: The compliance evaluation report is generated.
   * 
   * @example
   * COMPLETE
   */
  reportStatus?: string;
  /**
   * @remarks
   * The URL that is used to download the compliance evaluation report.
   */
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

