// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-7f00626622af0041****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * You can call the [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html) operation to obtain the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   * 
   * @deprecated
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

