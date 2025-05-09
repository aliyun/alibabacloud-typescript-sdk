// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetNatFirewallRuleHitCountRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 3de3aed5-6de7-4ecd-9106-cfe994b9c49f
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-zm0h3c1exm5bifuorg8c5
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

