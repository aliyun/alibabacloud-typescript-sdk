// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScanRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4abntrj42twd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of namespaces.
   * 
   * *   When the scan scope is NAMESPACE, this parameter cannot be empty.
   * *   If the scan scope is REPO, you must specify a unique Namespace for this parameter.
   * 
   * **if can be null:**
   * true
   */
  namespacesShrink?: string;
  /**
   * @remarks
   * The list of repositories.
   * 
   * *   When the scan scope is NAMESPACE, this parameter must be empty.
   * *   When the scan scope is REPO, this parameter cannot be empty.
   * 
   * **if can be null:**
   * true
   */
  repoNamesShrink?: string;
  /**
   * @remarks
   * The tag filtering rules.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-.*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * scan-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crscnr-3qmkeiuggfpjkfrq
   */
  scanRuleId?: string;
  /**
   * @remarks
   * The scan scope.
   * 
   * Valid values:
   * 
   * *   NAMESPACE: namespace.
   * *   REPO: repository.
   * 
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  scanScope?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * Valid values:
   * 
   * *   AUTO: automatically triggers.
   * *   MANUAL: manually triggers.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespacesShrink: 'Namespaces',
      repoNamesShrink: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleName: 'RuleName',
      scanRuleId: 'ScanRuleId',
      scanScope: 'ScanScope',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespacesShrink: 'string',
      repoNamesShrink: 'string',
      repoTagFilterPattern: 'string',
      ruleName: 'string',
      scanRuleId: 'string',
      scanScope: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

