// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting extends $dara.Model {
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Back-off
   */
  message?: string;
  /**
   * @remarks
   * The reason for the transition into the current status of the event.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

