// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CoachCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * coached-agent@ccc-test
   */
  coachedUserId?: string;
  /**
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
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

