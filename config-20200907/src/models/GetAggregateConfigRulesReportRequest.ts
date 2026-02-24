// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRulesReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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

