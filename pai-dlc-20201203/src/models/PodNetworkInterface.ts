// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PodNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * The name of the network interface.
   * 
   * @example
   * eth0
   */
  interfaceName?: string;
  /**
   * @remarks
   * The IP address of the network interface.
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      interfaceName: 'InterfaceName',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceName: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

