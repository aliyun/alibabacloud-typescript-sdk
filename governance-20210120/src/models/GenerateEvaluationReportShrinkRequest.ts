// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateEvaluationReportShrinkRequest extends $dara.Model {
  /**
   * @example
   * 103144549568****
   */
  accountId?: number;
  accountIdsShrink?: string;
  /**
   * @remarks
   * RegionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * EvaluationAccountExcelReport
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountIdsShrink: 'AccountIds',
      regionId: 'RegionId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountIdsShrink: 'string',
      regionId: 'string',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

