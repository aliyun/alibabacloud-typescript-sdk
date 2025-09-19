// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDefineRuleConfigResponseBodyDataRuleTreeRuleList extends $dara.Model {
  /**
   * @remarks
   * The keyword of the check rule.
   * 
   * @example
   * huaweicloud_ak
   */
  ruleKey?: string;
  /**
   * @remarks
   * The name of the check rule.
   * 
   * @example
   * huaweicloud_ak
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the check rule is selected. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The category keyword of the check rule.
   * 
   * @example
   * password
   */
  classKey?: string;
  /**
   * @remarks
   * The category name of the check rule.
   * 
   * @example
   * password
   */
  className?: string;
  /**
   * @remarks
   * The list of check rules.
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
   * Indicates whether the new rule is enabled for automatic check only on agentless detection. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
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
   * The total number of check rules.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * The tree of the check rules.
   */
  ruleTree?: GetSensitiveDefineRuleConfigResponseBodyDataRuleTree[];
  /**
   * @remarks
   * The number of selected check rules.
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSensitiveDefineRuleConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

