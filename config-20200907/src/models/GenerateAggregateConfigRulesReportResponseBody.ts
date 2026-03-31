// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAggregateConfigRulesReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance evaluation report.
   * 
   * @example
   * crp-88176457e0d900c9****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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

