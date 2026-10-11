// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyConfigurationAttributeRequestDefaultRulePhaseActions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  postResponse?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  preDns?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  preRequest?: string;
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: 'string',
      preDns: 'string',
      preRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyConfigurationAttributeRequestEgressProxyRuleGroups extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eprg-gw80bb6a95380edb****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroupId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEgressProxyConfigurationAttributeRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  defaultRulePhaseActions?: UpdateEgressProxyConfigurationAttributeRequestDefaultRulePhaseActions;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * epc-gw80d16a969933e7****
   */
  egressProxyConfigurationId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyConfigurationName?: string;
  egressProxyRuleGroups?: UpdateEgressProxyConfigurationAttributeRequestEgressProxyRuleGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      defaultRulePhaseActions: 'DefaultRulePhaseActions',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyConfigurationName: 'EgressProxyConfigurationName',
      egressProxyRuleGroups: 'EgressProxyRuleGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      defaultRulePhaseActions: UpdateEgressProxyConfigurationAttributeRequestDefaultRulePhaseActions,
      description: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationId: 'string',
      egressProxyConfigurationName: 'string',
      egressProxyRuleGroups: { 'type': 'array', 'itemType': UpdateEgressProxyConfigurationAttributeRequestEgressProxyRuleGroups },
    };
  }

  validate() {
    if(this.defaultRulePhaseActions && typeof (this.defaultRulePhaseActions as any).validate === 'function') {
      (this.defaultRulePhaseActions as any).validate();
    }
    if(Array.isArray(this.egressProxyRuleGroups)) {
      $dara.Model.validateArray(this.egressProxyRuleGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

