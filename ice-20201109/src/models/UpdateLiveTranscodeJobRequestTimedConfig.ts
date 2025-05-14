// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeJobRequestTimedConfig extends $dara.Model {
  /**
   * @remarks
   * The stop time of the transcoding job. Note: The time span between the stop time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-08-05T06:08:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the transcoding job. Note: The time span between the start time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-06-19T02:16:41Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

