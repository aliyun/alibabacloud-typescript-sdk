// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions extends $dara.Model {
  /**
   * @example
   * 2025-05-31T03:12:29Z
   */
  createTime?: string;
  /**
   * @example
   * 192.168.0.0/0
   */
  destCidrIp?: string;
  /**
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * sgr-uf6ffg4du0e9jis2****
   */
  securityGroupRuleId?: string;
  /**
   * @example
   * 192.168.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      securityGroupRuleId: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCSecurityGroupPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * Accept
   */
  innerAccessPolicy?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  /**
   * @example
   * sg-2ze27hs990o2hn94****
   */
  securityGroupId?: string;
  securityGroupPermissions?: DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions[];
  /**
   * @example
   * vpc-bp1opxu1zkhn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      innerAccessPolicy: 'InnerAccessPolicy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissions: 'SecurityGroupPermissions',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerAccessPolicy: 'string',
      regionId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupPermissions: { 'type': 'array', 'itemType': DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupPermissions)) {
      $dara.Model.validateArray(this.securityGroupPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

