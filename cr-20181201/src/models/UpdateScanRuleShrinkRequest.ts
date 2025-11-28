// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScanRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-4abntrj42twd****
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
   * prod-.*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scan-test
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crscnr-3qmkeiuggfpjkfrq
   */
  scanRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  scanScope?: string;
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

