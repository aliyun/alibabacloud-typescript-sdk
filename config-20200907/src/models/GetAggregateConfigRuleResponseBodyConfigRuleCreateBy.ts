// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleResponseBodyConfigRuleCreateBy extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-04b3fd170e340007****
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
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af008****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * The name of the compliance package.
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the account that was used to create the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the account that was used to create the rule.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the entity to which the rule belongs. The value is fixed to `AGGREGATOR`, which indicates an account group.
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

