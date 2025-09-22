// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllActivityInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234
   */
  activityId?: number;
  /**
   * @example
   * vip
   */
  channelName?: string;
  companyName?: string;
  /**
   * @example
   * test
   */
  customerName?: string;
  /**
   * @example
   * xx@aliyun.com
   */
  email?: string;
  id?: number;
  /**
   * @example
   * true
   */
  isVipCustomer?: string;
  /**
   * @example
   * 12123455
   */
  mobile?: string;
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

export class QueryAllActivityInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryAllActivityInfoResponseBodyData[];
  httpStatusCode?: number;
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
      data: { 'type': 'array', 'itemType': QueryAllActivityInfoResponseBodyData },
      httpStatusCode: 'number',
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

