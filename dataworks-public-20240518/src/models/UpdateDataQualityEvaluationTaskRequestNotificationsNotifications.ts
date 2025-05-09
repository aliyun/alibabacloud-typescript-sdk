// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels } from "./UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels";
import { UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers } from "./UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers";


export class UpdateDataQualityEvaluationTaskRequestNotificationsNotifications extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels[];
  /**
   * @remarks
   * The configurations of alert recipients.
   */
  notificationReceivers?: UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestNotificationsNotificationsNotificationReceivers },
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

