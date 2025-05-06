// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRulesReportResponseBodyConfigRulesReport } from "./GetConfigRulesReportResponseBodyConfigRulesReport";


export class GetConfigRulesReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation report.
   */
  configRulesReport?: GetConfigRulesReportResponseBodyConfigRulesReport;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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
      configRulesReport: GetConfigRulesReportResponseBodyConfigRulesReport,
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

