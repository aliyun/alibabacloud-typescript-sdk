// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDefineRuleConfigResponseBodyDataRuleTreeRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule keyword.
   * 
   * @example
   * huaweicloud_ak
   */
  ruleKey?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * huaweicloud_ak
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the rule is selected. Valid values:
   * - **true**: Selected.
   * - **false**: Not selected.
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      ruleKey: 'RuleKey',
      ruleName: 'RuleName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleKey: 'string',
      ruleName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDefineRuleConfigResponseBodyDataRuleTree extends $dara.Model {
  /**
   * @remarks
   * The classification keyword of the check item.
   * 
   * @example
   * password
   */
  classKey?: string;
  /**
   * @remarks
   * The classification name of the check item.
   * 
   * @example
   * password
   */
  className?: string;
  /**
   * @remarks
   * The list of check item rules.
   */
  ruleList?: GetSensitiveDefineRuleConfigResponseBodyDataRuleTreeRuleList[];
  static names(): { [key: string]: string } {
    return {
      classKey: 'ClassKey',
      className: 'ClassName',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classKey: 'string',
      className: 'string',
      ruleList: { 'type': 'array', 'itemType': GetSensitiveDefineRuleConfigResponseBodyDataRuleTreeRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDefineRuleConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic check is enabled for new rules. This parameter takes effect only for agentless checks. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  enableNewRule?: number;
  /**
   * @remarks
   * The custom configuration ID.
   * 
   * @example
   * 44616
   */
  id?: number;
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * The check item rule tree.
   */
  ruleTree?: GetSensitiveDefineRuleConfigResponseBodyDataRuleTree[];
  /**
   * @remarks
   * The number of selected check items.
   * 
   * @example
   * 99
   */
  selectedCount?: number;
  static names(): { [key: string]: string } {
    return {
      enableNewRule: 'EnableNewRule',
      id: 'Id',
      ruleCount: 'RuleCount',
      ruleTree: 'RuleTree',
      selectedCount: 'SelectedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNewRule: 'number',
      id: 'number',
      ruleCount: 'number',
      ruleTree: { 'type': 'array', 'itemType': GetSensitiveDefineRuleConfigResponseBodyDataRuleTree },
      selectedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleTree)) {
      $dara.Model.validateArray(this.ruleTree);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveDefineRuleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned by the API request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data details.
   */
  data?: GetSensitiveDefineRuleConfigResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSensitiveDefineRuleConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

