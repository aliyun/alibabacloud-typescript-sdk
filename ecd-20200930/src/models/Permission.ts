// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Permission extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The protocol type.
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The NIC type.
   */
  nicType?: string;
  /**
   * @remarks
   * The policy.
   */
  policy?: string;
  /**
   * @remarks
   * The port range.
   */
  portRange?: string;
  /**
   * @remarks
   * The priority.
   */
  priority?: string;
  /**
   * @remarks
   * The source CIDR block.
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source port range.
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
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

