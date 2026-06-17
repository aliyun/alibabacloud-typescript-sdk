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
   * Valid value:
   * 
   * - **out**: outbound traffic.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
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
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The new priority for the IPv4 access control policy of the NAT firewall.
   * Priorities are represented by numbers. A smaller number indicates a higher priority. The value 1 indicates the highest priority.
   * 
   * > The new priority must be within the range of existing priorities for IPv4 policies of the NAT firewall. Otherwise, the call fails.
   * 
   * Before calling this operation, call the DescribeNatFirewallPolicyPriorUsed operation to query the priority range of existing IPv4 policies for the specified traffic direction of the NAT firewall.
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

