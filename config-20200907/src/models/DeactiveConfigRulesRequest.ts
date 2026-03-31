// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactiveConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The ID of the rule. Separate multiple rule IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * @example
   * cr-19a56457e0d90058****
   */
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

