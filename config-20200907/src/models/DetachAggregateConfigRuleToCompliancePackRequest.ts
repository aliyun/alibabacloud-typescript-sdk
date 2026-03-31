// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachAggregateConfigRuleToCompliancePackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-75b4626622af00c3****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-5bb1626622af00bd****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The rule IDs. Separate multiple rule IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-a124626622af00e7****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
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

