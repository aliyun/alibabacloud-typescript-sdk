// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels } from "./ListDialarmRulesResponseBodyPagingInfoDijobAlarmRulesNotificationSettingsNotificationChannels";
import { ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers } from "./ListDialarmRulesResponseBodyPagingInfoDijobAlarmRulesNotificationSettingsNotificationReceivers";


export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and replaced by the MuteInterval parameter.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The duration of the alert suppression interval. Unit: minutes.
   * 
   * @example
   * 5
   */
  muteInterval?: number;
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The settings of alert notification recipients.
   */
  notificationReceivers?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      muteInterval: 'MuteInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      muteInterval: 'number',
      notificationChannels: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    if(Array.isArray(this.notificationReceivers)) {
      $dara.Model.validateArray(this.notificationReceivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

