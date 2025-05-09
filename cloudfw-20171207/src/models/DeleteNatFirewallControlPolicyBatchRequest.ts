// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatFirewallControlPolicyBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of access control policies.
   * 
   * This parameter is required.
   */
  aclUuidList?: string[];
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * @example
   * out
   */
  direction?: string;
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
   * This parameter is required.
   * 
   * @example
   * ngw-uf6j0426ap74vd6vrb676
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuidList: 'AclUuidList',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuidList: { 'type': 'array', 'itemType': 'string' },
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclUuidList)) {
      $dara.Model.validateArray(this.aclUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

