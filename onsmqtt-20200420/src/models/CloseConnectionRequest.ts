// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the MSMQ MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
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

