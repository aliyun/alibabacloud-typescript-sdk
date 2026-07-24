// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDebugDataRequest extends $dara.Model {
  cursor?: string;
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobName?: string;
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      limit: 'Limit',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobName: 'string',
      limit: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

