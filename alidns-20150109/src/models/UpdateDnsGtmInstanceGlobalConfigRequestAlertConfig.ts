// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  dingtalkNotice?: boolean;
  /**
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @example
   * true
   */
  smsNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

