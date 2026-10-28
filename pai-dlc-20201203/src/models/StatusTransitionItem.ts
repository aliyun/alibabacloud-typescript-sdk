// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatusTransitionItem extends $dara.Model {
  /**
   * @remarks
   * The end time of this status (UTC).
   * 
   * @example
   * 2020-11-08T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The reason code for this status.
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The detailed message for this status.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The start time of this status (UTC).
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

