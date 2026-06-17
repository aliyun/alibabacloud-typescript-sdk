// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatFirewallControlPolicyBatchRequest extends $dara.Model {
  /**
   * @remarks
   * A list of access control list (ACL) UUIDs.
   * 
   * This parameter is required.
   */
  aclUuidList?: string[];
  /**
   * @remarks
   * The traffic direction for the access control policy. Valid value:
   * 
   * - **out**: outbound traffic.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
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

