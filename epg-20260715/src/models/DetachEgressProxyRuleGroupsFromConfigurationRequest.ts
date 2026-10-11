// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachEgressProxyRuleGroupsFromConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: Sends a check request and does not disassociate the egress proxy rule groups. The check items include whether the required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the check succeeds, an HTTP 2xx status code is returned and the operation is directly executed.
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
   * epc-hn302f6a9a284c4****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The IDs of the egress proxy rule groups to be disassociated from the egress proxy configuration.
   * 
   * This parameter is required.
   */
  egressProxyRuleGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyRuleGroupIds: 'EgressProxyRuleGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationId: 'string',
      egressProxyRuleGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyRuleGroupIds)) {
      $dara.Model.validateArray(this.egressProxyRuleGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

