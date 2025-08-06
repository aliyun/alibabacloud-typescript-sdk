// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDailyAsyncJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  jobState?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobState: 'JobState',
      jobType: 'JobType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobState: 'string',
      jobType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

