// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * List of rule IDs to be operated on, separated by English commas (,).
   * > You can call the [DescribeHttpDDoSAttackRules](~~DescribeHttpDDoSAttackRules~~) interface to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 87570
   */
  ruleIds?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Rule status
   * 
   * - **on**: Enable.
   * - **off**: Disable.
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

