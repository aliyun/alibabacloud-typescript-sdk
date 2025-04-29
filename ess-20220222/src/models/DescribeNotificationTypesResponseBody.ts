// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotificationTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types of the notifications.
   * 
   * *   AUTOSCALING:SCALE_OUT_SUCCESS: The scale-out activity succeeds.
   * *   AUTOSCALING:SCALE_IN_SUCCESS: The scale-in activity succeeds.
   * *   AUTOSCALING:SCALE_OUT_ERROR: The scale-out activity fails.
   * *   AUTOSCALING:SCALE_IN_ERROR: The scale-in activity fails.
   * *   AUTOSCALING:SCALE_REJECT: The request for scaling activities is rejected.
   * *   AUTOSCALING:SCALE_OUT_START: The scale-out activity starts.
   * *   AUTOSCALING:SCALE_IN_START: The scale-in activity starts.
   * *   AUTOSCALING:SCHEDULE_TASK_EXPIRING: Auto Scaling sends a notification when a scheduled task is about to expire.
   */
  notificationTypes?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationTypes: 'NotificationTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notificationTypes)) {
      $dara.Model.validateArray(this.notificationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

