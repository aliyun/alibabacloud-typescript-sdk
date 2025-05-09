// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAlertRuleRequestNotificationReceivers } from "./UpdateAlertRuleRequestNotificationReceivers";


export class UpdateAlertRuleRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The alert notification channels.
   */
  channels?: string[];
  /**
   * @remarks
   * The interval at which an alert notification is sent. Unit: minutes. Valid values: [5,10000].
   * 
   * @example
   * 30
   */
  intervalInMinutes?: number;
  /**
   * @remarks
   * The maximum number of times an alert notification can be sent within a calendar day. Valid values: [1, 10000].
   * 
   * @example
   * 3
   */
  maximum?: number;
  /**
   * @remarks
   * The alert recipients.
   */
  receivers?: UpdateAlertRuleRequestNotificationReceivers[];
  /**
   * @remarks
   * The end time for silence. The time is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time for silence. The time is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  silenceStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      intervalInMinutes: 'IntervalInMinutes',
      maximum: 'Maximum',
      receivers: 'Receivers',
      silenceEndTime: 'SilenceEndTime',
      silenceStartTime: 'SilenceStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      intervalInMinutes: 'number',
      maximum: 'number',
      receivers: { 'type': 'array', 'itemType': UpdateAlertRuleRequestNotificationReceivers },
      silenceEndTime: 'string',
      silenceStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

