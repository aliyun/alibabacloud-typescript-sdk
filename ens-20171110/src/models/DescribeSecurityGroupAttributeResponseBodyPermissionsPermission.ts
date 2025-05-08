// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeResponseBodyPermissionsPermission extends $dara.Model {
  /**
   * @remarks
   * The time at which the security group rule was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testDescription1
   */
  description?: string;
  /**
   * @remarks
   * The range of destination IP addresses for outbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The direction in which the security group rule is applied.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The transport layer protocol.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The policy.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The range of source IP addresses for inbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source port number range for the security group.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
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

