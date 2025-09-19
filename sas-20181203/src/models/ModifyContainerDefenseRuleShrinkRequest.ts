// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerDefenseRuleShrinkRequestScope extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include all namespaces. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allNamespace?: number;
  /**
   * @remarks
   * The ID of the cluster on which the rule takes effect.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * c54b***1501
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespaces.
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

export class ModifyContainerDefenseRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Prevent non-mirror programs from starting in containers
   */
  description?: string;
  /**
   * @remarks
   * The action specified in the rule. Valid values:
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
   * The ID of the rule.
   * 
   * >  You can call the [ListContainerDefenseRule](https://help.aliyun.com/document_detail/2590599.html) operation to query the IDs of rules.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   1: system rule
   * *   2: custom rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The effective scope of the rule.
   */
  scope?: ModifyContainerDefenseRuleShrinkRequestScope[];
  /**
   * @remarks
   * The whitelist.
   */
  whitelistShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
      scope: 'Scope',
      whitelistShrink: 'Whitelist',
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
      scope: { 'type': 'array', 'itemType': ModifyContainerDefenseRuleShrinkRequestScope },
      whitelistShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

