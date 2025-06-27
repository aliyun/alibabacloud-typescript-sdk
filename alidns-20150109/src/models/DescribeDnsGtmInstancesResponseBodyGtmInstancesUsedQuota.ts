// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota extends $dara.Model {
  /**
   * @remarks
   * The total number of sent DingTalk notifications.
   * 
   * @example
   * 100
   */
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The total number of sent email notifications.
   * 
   * @example
   * 100
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The total number of sent SMS notifications.
   * 
   * @example
   * 100
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of created detection tasks.
   * 
   * @example
   * 100
   */
  taskUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUsedCount: 'DingtalkUsedCount',
      emailUsedCount: 'EmailUsedCount',
      smsUsedCount: 'SmsUsedCount',
      taskUsedCount: 'TaskUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUsedCount: 'number',
      emailUsedCount: 'number',
      smsUsedCount: 'number',
      taskUsedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

