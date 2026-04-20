// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialRequest extends $dara.Model {
  /**
   * @example
   * d4c38420-****-43bc-b001-56bfc274****
   */
  deviceId?: string;
  /**
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
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

