// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAggregateRemediationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-6b7c626622af00b4****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resources to be remediated belong. If this parameter is left empty, non-compliant resources of all accounts in the account group are remediated.
   * 
   * > You must specify the ID of the current management account or a member account in the account group of the management account.
   * 
   * @example
   * 100271897542****
   */
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

