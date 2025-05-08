// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork extends $dara.Model {
  /**
   * @remarks
   * The port of the container.
   * 
   * @example
   * 10000-10010
   */
  containerPorts?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 39.105.62.120
   */
  externalIp?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 80-8080
   */
  hostPorts?: string;
  /**
   * @remarks
   * The protocol of the gateway. The value is of the enumeration type. Valid values:
   * 
   * *   TCP
   * *   UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      containerPorts: 'ContainerPorts',
      externalIp: 'ExternalIp',
      hostPorts: 'HostPorts',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerPorts: 'string',
      externalIp: 'string',
      hostPorts: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

