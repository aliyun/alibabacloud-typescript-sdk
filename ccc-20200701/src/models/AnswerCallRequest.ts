// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerCallRequest extends $dara.Model {
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

