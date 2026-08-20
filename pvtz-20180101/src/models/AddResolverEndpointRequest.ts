// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddResolverEndpointRequestIpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone where the vSwitch resides.
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
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The IP address. The IP address must be within the specified CIDR block. If you leave this parameter empty, the system automatically assigns an IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
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
   * The list of source IP addresses for outbound traffic. You must add at least two IP addresses. You can add up to six IP addresses.
   * 
   * > To ensure high availability (HA), add at least two source IP addresses for the outbound endpoint. We recommend that you allocate these IP addresses in different zones. You can add a maximum of six source IP addresses.
   * 
   * This parameter is required.
   */
  ipConfig?: AddResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the endpoint. The name can be up to 20 characters long. An error is reported if the limit is exceeded.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group. The rules in the security group are applied to the outbound VPC.
   * 
   * > To prevent service interruptions, you cannot change this value after you create the outbound endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-0jld3m9yq7l2cw12****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the outbound virtual private cloud (VPC). All outbound DNS query traffic from the Resolver is forwarded through this VPC.
   * 
   * > To prevent service interruptions, you cannot change this value after you create the outbound endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The region ID of the outbound VPC.
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

