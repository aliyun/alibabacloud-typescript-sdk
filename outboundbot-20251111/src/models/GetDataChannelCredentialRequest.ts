// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client device ID used to apply for data channel credentials. It cannot be empty. It must be consistent with the DeviceId used by the same client for subsequent BridgeWebCall or MakePilotCall operations. The business identifier is provided by the integrator according to the agreement, and is not the ClientId returned by the service or the ChannelId of the voice channel.
   * 
   * @example
   * 10001
   */
  deviceId?: string;
  /**
   * @remarks
   * The instance identity of the associated product. You must use an instance that the user who invokes the operation has access to and that actually exists. It must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
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

