// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatFirewallControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 66961eea-e659-4225-84c9-9b6da76ec401
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * *   Set the value to **out**.
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
  /**
   * @remarks
   * The new priority of the IPv4 access control policy. You must specify a numeric value for this parameter. The value 1 indicates the highest priority. A larger value indicates a lower priority.
   * 
   * > Make sure that the value of this parameter is within the priority range of existing IPv4 access control policies. Otherwise, an error occurs when you call this operation.
   * 
   * Before you call this operation, we recommend that you call the DescribeNatFirewallPolicyPriorUsed operation to query the priority range of the IPv4 access control policies in the specified traffic direction.
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

