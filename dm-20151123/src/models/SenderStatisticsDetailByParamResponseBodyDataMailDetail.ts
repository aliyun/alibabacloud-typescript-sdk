// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsDetailByParamResponseBodyDataMailDetail extends $dara.Model {
  /**
   * @remarks
   * Sending address
   * 
   * @example
   * s***@example.net
   */
  accountName?: string;
  /**
   * @remarks
   * Detailed classification of error reasons: - SendOk - SmtpNxBox
   * etc.
   * 
   * @example
   * SendOk
   */
  errorClassification?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2021-04-28T17:11Z
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * Delivery detail information
   * 
   * @example
   * 250 Send Mail OK
   */
  message?: string;
  /**
   * @remarks
   * Delivery status: 0 Success, 2 Invalid Address, 3 Spam, 4 Other Failures
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Email subject
   * 
   * @example
   * test subject
   */
  subject?: string;
  /**
   * @remarks
   * Recipient address
   * 
   * @example
   * b***@example.net
   */
  toAddress?: string;
  /**
   * @remarks
   * UTC formatted update time
   * 
   * @example
   * 1619601108
   */
  utcLastUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      errorClassification: 'ErrorClassification',
      lastUpdateTime: 'LastUpdateTime',
      message: 'Message',
      status: 'Status',
      subject: 'Subject',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      errorClassification: 'string',
      lastUpdateTime: 'string',
      message: 'string',
      status: 'number',
      subject: 'string',
      toAddress: 'string',
      utcLastUpdateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

