// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule IDs to be operated on. Separate multiple IDs with commas (,).
   * > You can obtain this parameter by calling the [DescribeHttpDDoSAttackRules](~~DescribeHttpDDoSAttackRules~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 87570
   */
  ruleIds?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ruleIds: 'RuleIds',
      siteId: 'SiteId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIds: 'string',
      siteId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

