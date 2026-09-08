// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BargeInCallRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID whose call was barged in on.
   * 
   * This parameter is required.
   * 
   * @example
   * agent2@ccc-test
   */
  bargedUserId?: string;
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled in with any value.
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
   * Call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * Timeout for force insert, in seconds. If the force insert operation does not succeed within the specified time, it is canceled. Normally, the force insert operation succeeds immediately. The timeout setting is provided to handle abnormal scenarios. This field is optional and defaults to 30 seconds.
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * Agent ID initiating the force insert.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bargedUserId: 'BargedUserId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bargedUserId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
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

