// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveTranscodeJobRequestTimedConfig extends $dara.Model {
  /**
   * @remarks
   * The stop time of the transcoding job. Note: The time span between the stop time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-07-20T08:20:32Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the transcoding job. Note: The time span between the start time and the current time cannot exceed seven days.
   * 
   * @example
   * 2022-02-21T00:00:00Z
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

