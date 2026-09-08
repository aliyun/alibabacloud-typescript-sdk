// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotificationRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Contact Center instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of notification keys to query. For example, if you specify a call ID, the API returns all notifications for that call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ["job-468a63a2-****-****-****-b1ecf726d4be","job-532a63a2-****-****-****-bcccc26d4cc"]
   */
  notificationKeys?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      notificationKeys: 'NotificationKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      notificationKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

