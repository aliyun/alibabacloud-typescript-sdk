// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Permission extends $dara.Model {
  createTime?: string;
  description?: string;
  destCidrIp?: string;
  ipProtocol?: string;
  nicType?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  sourceCidrIp?: string;
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

