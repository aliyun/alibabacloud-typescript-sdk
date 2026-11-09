// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomAuthConnectBlackRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device to be blocked from connecting.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the Message Queue for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

