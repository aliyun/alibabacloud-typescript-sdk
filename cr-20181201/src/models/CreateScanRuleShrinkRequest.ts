// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-dqwc**********
   */
  instanceId?: string;
  /**
   * **if can be null:**
   * true
   */
  namespacesShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  repoNamesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NAMESPACE
   */
  scanScope?: string;
  /**
   * @example
   * VUL
   */
  scanType?: string;
  /**
   * @remarks
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

