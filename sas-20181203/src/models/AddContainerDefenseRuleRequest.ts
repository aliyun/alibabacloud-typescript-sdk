// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerDefenseRuleRequestScope extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include all namespaces. Valid values:
   * 
   * *   **0**: You can use the Namespaces parameter to specify the namespaces to include.
   * *   **1**: All namespaces are included.
   * 
   * @example
   * 0
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to query the IDs of clusters.
   * 
   * @example
   * 8e2***75b
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces to include.
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
   * The hash values of the files that need to be added to the whitelist.
   * 
   * > This parameter is not supported.
   * 
   * @deprecated
   */
  hash?: string[];
  /**
   * @remarks
   * The images that need to be added to the whitelist.
   */
  image?: string[];
  /**
   * @remarks
   * The paths to the files that need to be added to the whitelist.
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
   * The description of the rule.
   * 
   * @example
   * test-proc-defense
   */
  description?: string;
  /**
   * @remarks
   * The action that is performed when the rule is hit. Valid values:
   * 
   * *   **1**: alert
   * *   **2**: block
   * 
   * @example
   * 1
   */
  ruleAction?: number;
  /**
   * @remarks
   * The ID of the rule. You do not need to manually specify the ID.
   * 
   * @example
   * 500018
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * auto-test-rule-lt9umq
   */
  ruleName?: string;
  /**
   * @remarks
   * The switch of the rule. Valid values:
   * 
   * *   **0**: off
   * *   **1**: on
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * *   2: user-defined rules
   * 
   * > Only the value 2 is supported.
   * 
   * @example
   * 2
   */
  ruleType?: number;
  /**
   * @remarks
   * The scope.
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

