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

export class SenderStatisticsDetailByParamResponseBodyData extends $dara.Model {
  mailDetail?: SenderStatisticsDetailByParamResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': SenderStatisticsDetailByParamResponseBodyDataMailDetail },
    };
  }

  validate() {
    if(Array.isArray(this.mailDetail)) {
      $dara.Model.validateArray(this.mailDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SenderStatisticsDetailByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 90f0243616#203#a***@example.net-1658817689#a***@example.net.247141122178
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B5AB8EBB-EE64-4BB2-B085-B92CC5DEDC41
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed records
   */
  data?: SenderStatisticsDetailByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      requestId: 'string',
      data: SenderStatisticsDetailByParamResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

