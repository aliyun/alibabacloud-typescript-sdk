// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRulesReportResponseBodyConfigRulesReport } from "./GetAggregateConfigRulesReportResponseBodyConfigRulesReport";


export class GetAggregateConfigRulesReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation report.
   */
  configRulesReport?: GetAggregateConfigRulesReportResponseBodyConfigRulesReport;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0BCC7B2-D0E4-49B0-95D2-6689CFB08D31
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRulesReport: 'ConfigRulesReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRulesReport: GetAggregateConfigRulesReportResponseBodyConfigRulesReport,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRulesReport && typeof (this.configRulesReport as any).validate === 'function') {
      (this.configRulesReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

