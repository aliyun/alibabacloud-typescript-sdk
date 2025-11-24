// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiClusterNetworksValue extends $dara.Model {
  /**
   * @example
   * network1
   */
  network?: string;
  /**
   * @example
   * true
   */
  enableGateway?: boolean;
  /**
   * @example
   * 8.16x.1x.1x:15443
   */
  customGatewayAddress?: string;
  /**
   * @example
   * asm-cross-network-ccb37ff104***
   */
  gatewayName?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      enableGateway: 'EnableGateway',
      customGatewayAddress: 'CustomGatewayAddress',
      gatewayName: 'GatewayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: 'string',
      enableGateway: 'boolean',
      customGatewayAddress: 'string',
      gatewayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

