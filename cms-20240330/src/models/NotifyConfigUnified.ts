// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyChannel } from "./DirectNotifyChannel";


export class NotifyConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The active days of the week.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The end of the daily active time window. On active days, the system sends notifications only before this time. Format: `HH:mm`.
   */
  activeEndTime?: string;
  /**
   * @remarks
   * The start of the daily active time window. On active days, the system sends notifications only after this time. Format: `HH:mm`.
   */
  activeStartTime?: string;
  /**
   * @remarks
   * The notification channels that receive alerts.
   * 
   * This parameter is required.
   */
  channels?: DirectNotifyChannel[];
  /**
   * @remarks
   * The silence time in seconds. After sending a notification, the system suppresses new notifications for the same alert for this duration.
   */
  silenceTimeSecs?: number;
  /**
   * @remarks
   * The type of the notification configuration.
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * The UTC offset for `activeStartTime` and `activeEndTime`. The format is `[+/-]HH:mm`. For example, `+08:00` represents the UTC+8 time zone.
   */
  utcOffset?: string;
  static names(): { [key: string]: string } {
    return {
      activeDays: 'activeDays',
      activeEndTime: 'activeEndTime',
      activeStartTime: 'activeStartTime',
      channels: 'channels',
      silenceTimeSecs: 'silenceTimeSecs',
      type: 'type',
      utcOffset: 'utcOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDays: { 'type': 'array', 'itemType': 'number' },
      activeEndTime: 'string',
      activeStartTime: 'string',
      channels: { 'type': 'array', 'itemType': DirectNotifyChannel },
      silenceTimeSecs: 'number',
      type: 'string',
      utcOffset: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeDays)) {
      $dara.Model.validateArray(this.activeDays);
    }
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

