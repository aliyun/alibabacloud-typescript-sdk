// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PortProtocol extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The destination port number.
   * 
   * @example
   * 8080
   */
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

