// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CoachCallRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID being coached.
   * 
   * This parameter is required.
   * 
   * @example
   * coached-agent@ccc-test
   */
  coachedUserId?: string;
  /**
   * @remarks
   * Device ID. This field is meaningless and can be filled with any value.
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
   * job-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * Coaching timeout. If the coaching session is not established within the specified time, the coaching operation is canceled. This field is optional and defaults to 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * Agent ID initiating the coaching.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      coachedUserId: 'CoachedUserId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coachedUserId: 'string',
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

