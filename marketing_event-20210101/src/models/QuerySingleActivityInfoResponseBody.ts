// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleActivityInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123
   */
  activityId?: number;
  /**
   * @example
   * vip
   */
  channelName?: string;
  /**
   * @example
   * aliyun
   */
  companyName?: string;
  /**
   * @example
   * xxx
   */
  customerName?: string;
  /**
   * @example
   * xx@aliyun.com
   */
  email?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  isVipCustomer?: string;
  /**
   * @example
   * 234355**
   */
  mobile?: string;
  /**
   * @example
   * http://xxx.com?a=xx
   */
  QRCode?: string;
  /**
   * @example
   * {}
   */
  reportFields?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      channelName: 'ChannelName',
      companyName: 'CompanyName',
      customerName: 'CustomerName',
      email: 'Email',
      id: 'Id',
      isVipCustomer: 'IsVipCustomer',
      mobile: 'Mobile',
      QRCode: 'QRCode',
      reportFields: 'ReportFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      channelName: 'string',
      companyName: 'string',
      customerName: 'string',
      email: 'string',
      id: 'number',
      isVipCustomer: 'string',
      mobile: 'string',
      QRCode: 'string',
      reportFields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleActivityInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QuerySingleActivityInfoResponseBodyData[];
  httpStatusCode?: string;
  /**
   * @example
   * null
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': QuerySingleActivityInfoResponseBodyData },
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

