// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHASwitchConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the automatic primary/secondary switchover feature. Valid values:
   * 
   * *   **Auto:** The automatic primary/secondary switchover feature is enabled. The system automatically switches your workloads over from the instance to its secondary instance in the event of a fault.
   * *   **Manual:** The automatic primary/secondary switchover feature is temporarily disabled.
   * 
   * @example
   * Manual
   */
  HAConfig?: string;
  /**
   * @remarks
   * The time when the automatic primary/secondary switchover feature is enabled again. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-29T15:00:00Z
   */
  manualHATime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FDF4B79-2741-4C5F-8C76-4B953FC5C2B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      HAConfig: 'HAConfig',
      manualHATime: 'ManualHATime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAConfig: 'string',
      manualHATime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

