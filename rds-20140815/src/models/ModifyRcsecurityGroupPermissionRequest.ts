// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCSecurityGroupPermissionRequest extends $dara.Model {
  /**
   * @example
   * 172.16.0.0/24
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-2ze27hs990o2hn9****
   */
  securityGroupId?: string;
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
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      securityGroupId: 'string',
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

