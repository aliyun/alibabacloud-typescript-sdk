// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 5
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end time of metric collection. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1667196043904
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metrics.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The business phone number.
   * 
   * @example
   * 861380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The start time of metric collection. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1669619491000
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      deliveredCount: 'DeliveredCount',
      end: 'End',
      granularity: 'Granularity',
      phoneNumber: 'PhoneNumber',
      sentCount: 'SentCount',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredCount: 'number',
      end: 'number',
      granularity: 'string',
      phoneNumber: 'string',
      sentCount: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - OK: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappPhoneNumberMetricResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 608F9CCA-B5EB-3D72-8047-B25D6D75BDEC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChatappPhoneNumberMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
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

