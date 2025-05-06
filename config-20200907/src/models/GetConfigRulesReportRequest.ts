// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRulesReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance evaluation report.
   * 
   * @example
   * crp-88176457e0d900c9****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

