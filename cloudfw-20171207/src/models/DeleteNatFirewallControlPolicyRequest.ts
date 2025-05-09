// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To delete an access control policy, you must provide the ID of the policy. You can call the DescribeNatFirewallControlPolicy operation to query the UUIDs of access control policies.
   * 
   * This parameter is required.
   * 
   * @example
   * b6c8f905-2eb6-442a-ba35-9416e9dbb2c5
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
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
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
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

