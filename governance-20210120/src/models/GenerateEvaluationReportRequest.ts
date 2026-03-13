// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateEvaluationReportRequest extends $dara.Model {
  /**
   * @example
   * 103144549568****
   */
  accountId?: number;
  accountIds?: number[];
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
      accountIds: 'AccountIds',
      regionId: 'RegionId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountIds: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      reportType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

