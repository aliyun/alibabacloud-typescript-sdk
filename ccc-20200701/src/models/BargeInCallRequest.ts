// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BargeInCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent2@ccc-test
   */
  bargedUserId?: string;
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
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
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

