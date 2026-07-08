// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatFirewallControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 66461eea-e659-4225-84c9-*****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy.
   * 
   * Valid values:
   * 
   * - **out**: outbound traffic.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The policy priority for the NAT firewall IPv4 access control policy. A value of 1 indicates the highest priority. A larger value indicates a lower priority.
   * 
   * > The policy priority value must be within the range of existing NAT firewall IPv4 policy priorities. Otherwise, an error occurs when you call this operation.
   * 
   * Before you call this operation, call DescribeNatFirewallPolicyPriorUsed to query the priority range of IPv4 policies for the specified traffic direction of the NAT firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  newOrder?: number;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      newOrder: 'NewOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
      newOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

