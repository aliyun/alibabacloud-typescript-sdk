// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PortProtocol extends $dara.Model {
  port?: number;
  protocol?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

