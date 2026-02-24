// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

