// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeRtcCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callee?: string;
  caller?: string;
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
  serviceProvider?: string;
  tags?: string;
  timeoutSeconds?: number;
  userId?: string;
  videoEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      serviceProvider: 'ServiceProvider',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
      videoEnabled: 'VideoEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      instanceId: 'string',
      serviceProvider: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
      videoEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

