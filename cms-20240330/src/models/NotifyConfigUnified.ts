// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyChannel } from "./DirectNotifyChannel";
import { SeverityNotifyConfig } from "./SeverityNotifyConfig";


export class NotifyConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The days of the week when notifications are sent, ranging from 1 to 7.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The daily end time for the notification effective period.
   * 
   * @example
   * 20:00
   */
  activeEndTime?: string;
  /**
   * @remarks
   * The daily start time for the notification effective period.
   * 
   * @example
   * 08:00
   */
  activeStartTime?: string;
  /**
   * @remarks
   * The list of notification channels.
   */
  channels?: DirectNotifyChannel[];
  /**
   * @remarks
   * The list of notification policy IDs.
   */
  notifyStrategies?: string[];
  /**
   * @remarks
   * Specifies whether to send a recovery notification. Default value: true. This setting can be independently overridden for each severity level in severityChannels.
   * 
   * @example
   * true
   */
  sendRecoverNotification?: boolean;
  /**
   * @remarks
   * The notification recipients and channels configured for each severity level. The key is the severity level: CRITICAL, ERROR, WARNING, or INFO.
   * 
   * @example
   * {"CRITICAL":{"sendRecoverNotification":true}}
   */
  severityChannels?: { [key: string]: SeverityNotifyConfig };
  /**
   * @remarks
   * The mute epoch in seconds.
   * 
   * @example
   * 60
   */
  silenceTimeSecs?: number;
  /**
   * @remarks
   * The notification configuration type.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECT_NOTIFY
   */
  type?: string;
  /**
   * @remarks
   * The UTC time zone offset.
   * 
   * @example
   * +08:00
   */
  utcOffset?: string;
  static names(): { [key: string]: string } {
    return {
      activeDays: 'activeDays',
      activeEndTime: 'activeEndTime',
      activeStartTime: 'activeStartTime',
      channels: 'channels',
      notifyStrategies: 'notifyStrategies',
      sendRecoverNotification: 'sendRecoverNotification',
      severityChannels: 'severityChannels',
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
      notifyStrategies: { 'type': 'array', 'itemType': 'string' },
      sendRecoverNotification: 'boolean',
      severityChannels: { 'type': 'map', 'keyType': 'string', 'valueType': SeverityNotifyConfig },
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
    if(Array.isArray(this.notifyStrategies)) {
      $dara.Model.validateArray(this.notifyStrategies);
    }
    if(this.severityChannels) {
      $dara.Model.validateMap(this.severityChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

