// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries } from "./GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries";


export class GetAggregateConfigRuleSummaryByRiskLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The summary of compliance evaluation results by rule risk level.
   */
  configRuleSummaries?: GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3CDD98C-DE65-46AC-B2D2-04A4A9AB5B73
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleSummaries: 'ConfigRuleSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleSummaries: { 'type': 'array', 'itemType': GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleSummaries)) {
      $dara.Model.validateArray(this.configRuleSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

