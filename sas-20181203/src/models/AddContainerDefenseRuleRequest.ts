// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerDefenseRuleRequestScope extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include all namespaces. Valid values:
   * 
   * - **0**: Specifies the namespaces to include by using the Namespaces parameter.
   * 
   * - **1**: Includes all namespaces.
   * 
   * @example
   * 0
   */
  allNamespace?: number;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to obtain this parameter.
   * 
   * @example
   * 8e2***75b
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of included namespaces.
   */
  namespaces?: string[];
  static names(): { [key: string]: string } {
    return {
      allNamespace: 'AllNamespace',
      clusterId: 'ClusterId',
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allNamespace: 'number',
      clusterId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerDefenseRuleRequestWhitelist extends $dara.Model {
  /**
   * @remarks
   * The file hash.>Notice: This parameter is not supported.
   * 
   * @deprecated
   */
  hash?: string[];
  /**
   * @remarks
   * The list of images to whitelist.
   */
  image?: string[];
  /**
   * @remarks
   * The list of file paths to whitelist.
   */
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      image: 'Image',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: { 'type': 'array', 'itemType': 'string' },
      image: { 'type': 'array', 'itemType': 'string' },
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hash)) {
      $dara.Model.validateArray(this.hash);
    }
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-proc-defense
   */
  description?: string;
  /**
   * @remarks
   * The action to take when the rule is matched. Valid values:
   * 
   * - **1**: Alert.
   * 
   * - **2**: Block.
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The rule ID. You do not need to specify this parameter when creating a rule.
   * 
   * @example
   * 500018
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * auto-test-rule-lt9umq
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule switch. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - 2: user rule
   * 
   * >Notice: Only the value 2 is supported.
   * 
   * @example
   * 2
   */
  ruleType?: number;
  /**
   * @remarks
   * The scope. This parameter is required. Specify at least one Scope entry, such as Scope.1.AllNamespace=1, which indicates that the rule applies to all namespaces. If this parameter is not specified, the API returns a 400 error.
   */
  scope?: AddContainerDefenseRuleRequestScope[];
  /**
   * @remarks
   * The whitelist.
   */
  whitelist?: AddContainerDefenseRuleRequestWhitelist;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
      scope: 'Scope',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleAction: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'number',
      scope: { 'type': 'array', 'itemType': AddContainerDefenseRuleRequestScope },
      whitelist: AddContainerDefenseRuleRequestWhitelist,
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    if(this.whitelist && typeof (this.whitelist as any).validate === 'function') {
      (this.whitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

