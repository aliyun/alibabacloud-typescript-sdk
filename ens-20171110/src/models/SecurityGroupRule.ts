// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecurityGroupRule extends $dara.Model {
  description?: string;
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      priority: 'priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

