// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerCallRequest extends $dara.Model {
  /**
   * @remarks
   * The device ID. This parameter is meaningless and can be filled with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-65382141036853491
   */
  jobId?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
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

