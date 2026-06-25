// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VPC.
   * 
   * @example
   * 161*******66
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether authoritative DNS resolution is enabled. Default value: false.
   * 
   * @example
   * true
   */
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
   * The ID of the security group.
   * 
   * @example
   * sg-2ze4pgstgszvgq******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - Creating: The endpoint is being created.
   * 
   * - Running: The endpoint is running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual switch.
   * 
   * @example
   * vsw-8vb2qjoiio6m9pg******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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

export class ListGatewayIntranetLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of internal access endpoints.
   */
  intranetLinkedVpcList?: ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      intranetLinkedVpcList: 'IntranetLinkedVpcList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      intranetLinkedVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intranetLinkedVpcList)) {
      $dara.Model.validateArray(this.intranetLinkedVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

