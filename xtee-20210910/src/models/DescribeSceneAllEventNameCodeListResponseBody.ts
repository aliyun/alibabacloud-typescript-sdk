// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneAllEventNameCodeListResponseBodyResultObjectChildren extends $dara.Model {
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 测试
   */
  eventName?: string;
  /**
   * @remarks
   * Event type
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

export class DescribeSceneAllEventNameCodeListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Child objects
   */
  children?: DescribeSceneAllEventNameCodeListResponseBodyResultObjectChildren[];
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * MORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 营销风险识别_增强版
   */
  eventName?: string;
  /**
   * @remarks
   * Event type
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
      children: { 'type': 'array', 'itemType': DescribeSceneAllEventNameCodeListResponseBodyResultObjectChildren },
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

export class DescribeSceneAllEventNameCodeListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error details
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * Request ID, which is unique for each request, facilitating subsequent troubleshooting
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeSceneAllEventNameCodeListResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the operation was successful, where true means success.
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
      resultObject: { 'type': 'array', 'itemType': DescribeSceneAllEventNameCodeListResponseBodyResultObject },
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

