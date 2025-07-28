// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddResolverEndpointRequestIpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block. If you leave this parameter empty, the system automatically allocates an IP address.
   * 
   * @example
   * 172.16.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjqkql
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses of outbound traffic. You must add two to six source IP addresses.
   * 
   * >  You must add at least two source IP addresses for outbound traffic to ensure high availability. We recommend that you add two IP addresses that reside in different zones. You can add up to six source IP addresses.
   * 
   * This parameter is required.
   */
  ipConfig?: AddResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The endpoint name. The name can be up to 20 characters in length. If the upper limit is exceeded, an error message is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group. The security group rules are applied to the outbound VPC.
   * 
   * >  After you create the outbound endpoint, you cannot change the value of SecurityGroupId. This prevents the forwarding of DNS requests from being interrupted due to misoperations.
   * 
   * This parameter is required.
   * 
   * @example
   * kqlqlqjqqkq
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The outbound VPC ID. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
   * 
   * >  After you create the outbound endpoint, you cannot change the value of VpcId. This prevents the forwarding of DNS requests from being interrupted due to misoperations.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-129343jslslsks
   */
  vpcId?: string;
  /**
   * @remarks
   * The region ID of the outbound virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipConfig: { 'type': 'array', 'itemType': AddResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipConfig)) {
      $dara.Model.validateArray(this.ipConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

