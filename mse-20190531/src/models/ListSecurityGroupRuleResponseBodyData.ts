// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityGroupRuleResponseBodyData extends $dara.Model {
  authCidrs?: string[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-12a432a1f5da423997d8880bd32c304d
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the security group authorization record.
   * 
   * @example
   * 21
   */
  id?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 8000/8000
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1cg6qlyjepj0y6cf2c
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      authCidrs: 'AuthCidrs',
      description: 'Description',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCidrs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authCidrs)) {
      $dara.Model.validateArray(this.authCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

