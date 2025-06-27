// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceResponseBodyUsedQuota extends $dara.Model {
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The total number of emails that were sent.
   * 
   * @example
   * 123
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The total number of short messages that were sent.
   * 
   * @example
   * 123
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of detection tasks that were created.
   * 
   * @example
   * 123
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

