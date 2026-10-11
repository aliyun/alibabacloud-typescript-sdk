// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyRuleGroupAttributeRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
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
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyRuleGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRuleGroupName: 'EgressProxyRuleGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyIpPoolId: 'string',
      egressProxyRuleGroupId: 'string',
      egressProxyRuleGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

