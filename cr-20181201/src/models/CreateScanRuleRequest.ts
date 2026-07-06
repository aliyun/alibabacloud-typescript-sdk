// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-dqwc**********
   */
  instanceId?: string;
  /**
   * @remarks
   * The collection of namespaces.
   * - If the scan scope is set to NAMESPACE, this parameter cannot be empty.
   * - If the scan scope is set to REPO, this parameter must contain exactly one namespace.
   * 
   * **if can be null:**
   * true
   */
  namespaces?: string[];
  /**
   * @remarks
   * The list of repositories.
   * - If the scan scope is set to NAMESPACE, this parameter must be empty.
   * - If the scan scope is set to REPO, this parameter cannot be empty.
   * 
   * **if can be null:**
   * true
   */
  repoNames?: string[];
  /**
   * @remarks
   * The regular expression used to match tags that trigger a scan.
   * 
   * This parameter is required.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  ruleName?: string;
  /**
   * @remarks
   * The scan scope.
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
   * - `VUL`: cloud native artifact vulnerability scanning.
   * - `SBOM`: cloud native artifact content analysis.
   * 
   * Default value: `VUL`.
   * 
   * @example
   * VUL
   */
  scanType?: string;
  /**
   * @remarks
   * The trigger type.
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
      namespaces: 'Namespaces',
      repoNames: 'RepoNames',
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
      namespaces: { 'type': 'array', 'itemType': 'string' },
      repoNames: { 'type': 'array', 'itemType': 'string' },
      repoTagFilterPattern: 'string',
      ruleName: 'string',
      scanScope: 'string',
      scanType: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(Array.isArray(this.repoNames)) {
      $dara.Model.validateArray(this.repoNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

