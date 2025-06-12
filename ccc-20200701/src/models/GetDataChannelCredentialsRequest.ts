// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
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

