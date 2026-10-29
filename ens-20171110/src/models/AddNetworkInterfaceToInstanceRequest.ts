// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddNetworkInterfaceToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically restart the instance.
   * 
   * @example
   * true
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The network parameters in JSON string format. Currently, only IPv6 is supported. An example of adding an IPv6 gateway is as follows:
   * [{"ipType": "public", "ipAddressType": "ipv6"}]
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ipType": "public", "ipAddressType": "ipv6" }]
   */
  networks?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      instanceId: 'InstanceId',
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      instanceId: 'string',
      networks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

