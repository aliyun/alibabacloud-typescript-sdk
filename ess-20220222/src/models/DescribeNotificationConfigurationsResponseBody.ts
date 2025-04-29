// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels } from "./DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels";


export class DescribeNotificationConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The notification settings.
   */
  notificationConfigurationModels?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels[];
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
      notificationConfigurationModels: 'NotificationConfigurationModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationConfigurationModels: { 'type': 'array', 'itemType': DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notificationConfigurationModels)) {
      $dara.Model.validateArray(this.notificationConfigurationModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

