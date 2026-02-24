// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAggregateRemediationRequest extends $dara.Model {
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
  resourceAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      resourceAccountId: 'ResourceAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      resourceAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

