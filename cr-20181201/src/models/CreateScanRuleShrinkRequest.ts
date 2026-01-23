// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-dqwc**********
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
   * The tag that triggers the scan matches the regular expression
   * 
   * This parameter is required.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The rule name
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  ruleName?: string;
  /**
   * @remarks
   * The scan scope
   * 
   * Valid values:
   * 
   * *   NAMESPACE: namespace.
   * *   REPO: repository.
   * 
   * This parameter is required.
   * 
   * @example
   * NAMESPACE
   */
  scanScope?: string;
  /**
   * @remarks
   * The scan type. Valid values:
   * 
   * *   `VUL`: Products Cloud Security Scanner
   * *   `SBOM`: Product Content Analysis
   * 
   * Default value: `VUL`
   * 
   * @example
   * VUL
   */
  scanType?: string;
  /**
   * @remarks
   * Trigger type
   * 
   * Valid values:
   * 
   * *   AUTO: automatically trigger.
   * *   MANUAL: manually trigger.
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
      scanScope: 'ScanScope',
      scanType: 'ScanType',
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
      scanScope: 'string',
      scanType: 'string',
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

