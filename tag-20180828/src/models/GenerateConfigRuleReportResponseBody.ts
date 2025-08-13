// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateConfigRuleReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource non-compliance report.
   * 
   * @example
   * crp-ao0786618088006c****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 37B2AC06-89D8-5D95-98DF-3E68C12BDE05
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

