// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallbacksResponseBodyCallbacks extends $dara.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 1
   */
  checkStatus?: string;
  /**
   * @example
   * RESPONSE_INVALID
   */
  code?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      checkStatus: 'CheckStatus',
      code: 'Code',
      conf: 'Conf',
      msg: 'Msg',
      status: 'Status',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkStatus: 'string',
      code: 'string',
      conf: 'string',
      msg: 'string',
      status: 'number',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subEvent)) {
      $dara.Model.validateArray(this.subEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponseBody extends $dara.Model {
  callbacks?: DescribeCallbacksResponseBodyCallbacks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbacks: 'Callbacks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbacks: { 'type': 'array', 'itemType': DescribeCallbacksResponseBodyCallbacks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callbacks)) {
      $dara.Model.validateArray(this.callbacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

