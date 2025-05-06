// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $dara.Model {
  /**
   * @remarks
   * The account group ID.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * @example
   * Test_Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * test-pack-name
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the management account that created the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the management account that create the rule.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the creator of the rule. The value is fixed to AGGREGATOR, which indicates an account group.
   * 
   * @example
   * AGGREGATOR
   */
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

