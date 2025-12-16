// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchedulerxNotificationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the effective time periods of notification channels.
   * 
   * >  Please see the detailed explanation of this parameter below.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "sendChannel": "sms,webhook,mail,phone",
   *   "timezone": "UTC+08:00",
   *   "webhookIsAtAll": "false",
   *   "timeRanges": {
   *     "all": [
   *       {
   *         "startTime": "08:00",
   *         "endTime": "18:00",
   *         "daysOfWeek": [1, 2, 3, 4, 5]
   *       }
   *     ]
   *   }
   * }
   */
  channelTimeRange?: string;
  /**
   * @remarks
   * The description of the notification policy.
   * 
   * @example
   * Monday-Friday only
   */
  description?: string;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test-weekdays
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelTimeRange: 'ChannelTimeRange',
      description: 'Description',
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTimeRange: 'string',
      description: 'string',
      policyName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

