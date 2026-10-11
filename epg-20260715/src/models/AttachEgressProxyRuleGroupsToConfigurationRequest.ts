// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEgressProxyRuleGroupsToConfigurationRequestEgressProxyRuleGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy rule group.
   * 
   * This parameter is required.
   * 
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * The priority of the egress proxy rule group in the egress proxy configuration. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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

export class AttachEgressProxyRuleGroupsToConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not attach the egress proxy rule groups. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * epc-uf609a6a8fdf9f4d****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The list of egress proxy rule group references to be attached to the egress proxy configuration.
   * 
   * This parameter is required.
   */
  egressProxyRuleGroups?: AttachEgressProxyRuleGroupsToConfigurationRequestEgressProxyRuleGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyRuleGroups: 'EgressProxyRuleGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationId: 'string',
      egressProxyRuleGroups: { 'type': 'array', 'itemType': AttachEgressProxyRuleGroupsToConfigurationRequestEgressProxyRuleGroups },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyRuleGroups)) {
      $dara.Model.validateArray(this.egressProxyRuleGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

