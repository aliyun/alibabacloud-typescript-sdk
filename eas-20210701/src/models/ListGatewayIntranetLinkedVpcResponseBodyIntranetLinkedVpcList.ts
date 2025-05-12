// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList extends $dara.Model {
  accountId?: string;
  authoritativeDnsEnabled?: boolean;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.10.11
   */
  ip?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze4pgstgszvgq******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is being created.
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is running.
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb2qjoiio6m9pg******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      authoritativeDnsEnabled: 'AuthoritativeDnsEnabled',
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      authoritativeDnsEnabled: 'boolean',
      ip: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

