// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllEventNameAndCodeResponseBodyResultObjectChildren extends $dara.Model {
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险旁路
   */
  eventName?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * BYPASS
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventType: 'eventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEventNameAndCodeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The list of child fields.
   */
  children?: DescribeAllEventNameAndCodeResponseBodyResultObjectChildren[];
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * MORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventType: 'eventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': DescribeAllEventNameAndCodeResponseBodyResultObjectChildren },
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEventNameAndCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeAllEventNameAndCodeResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      resultObject: 'resultObject',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAllEventNameAndCodeResponseBodyResultObject },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

