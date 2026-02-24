// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreAggregateEvaluationResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleId?: string;
  ignoreDate?: string;
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resourcesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

