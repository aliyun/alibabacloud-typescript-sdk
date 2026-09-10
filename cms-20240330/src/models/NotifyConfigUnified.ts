// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyChannel } from "./DirectNotifyChannel";
import { SeverityNotifyConfig } from "./SeverityNotifyConfig";


export class NotifyConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The days of the week on which notifications are sent, 1-7.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The daily notification effective end time.
   * 
   * @example
   * 20:00
   */
  activeEndTime?: string;
  /**
   * @remarks
   * The daily notification effective start time.
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
   * The list of notification policy IDs (type=NOTIFY_POLICY, currently a maximum of 1 is supported. Mutually exclusive with the DIRECT_NOTIFY fields channels/silenceTimeSecs/activeDays/activeStartTime/activeEndTime/utcOffset).
   */
  notifyStrategies?: string[];
  /**
   * @remarks
   * Specifies whether to send recovery notifications (type=DIRECT_NOTIFY). Default value: true. Each severity level in severityChannels can independently override this setting.
   * 
   * @example
   * true
   */
  sendRecoverNotification?: boolean;
  /**
   * @remarks
   * The Notification Recipients and channels configured by severity level (type=DIRECT_NOTIFY, new mode, mutually exclusive with channels). The key is the severity level: CRITICAL/ERROR/WARNING/INFO.
   */
  severityChannels?: { [key: string]: SeverityNotifyConfig };
  /**
   * @remarks
   * The mute for epoch in seconds.
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

