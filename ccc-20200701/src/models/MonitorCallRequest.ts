// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorCallRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the agent being monitored.
   * 
   * This parameter is required.
   * 
   * @example
   * agent2@ccc-test
   */
  monitoredUserId?: string;
  /**
   * @remarks
   * The timeout period for the listening operation, in seconds. If the listening operation does not succeed within the specified time, it is canceled. Normally, the listening operation succeeds immediately. The timeout setting is provided to handle abnormal scenarios. This field is optional and defaults to 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      monitoredUserId: 'MonitoredUserId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      monitoredUserId: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

