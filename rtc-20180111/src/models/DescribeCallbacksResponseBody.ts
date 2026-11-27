// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallbacksResponseBodyCallbacks extends $dara.Model {
  /**
   * @remarks
   * The callback code.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * The callback validation status. 0 indicates validating. 1 indicates validation successful. 2 indicates validation failed.
   * 
   * @example
   * 1
   */
  checkStatus?: string;
  /**
   * @remarks
   * The callback validation code.
   * 
   * @example
   * RESPONSE_INVALID
   */
  code?: string;
  /**
   * @remarks
   * The webhook address.
   * 
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  /**
   * @remarks
   * The callback validation message.
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * The callback status. 0 indicates enabled. 1 indicates disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The sub-events. For more information, see Callback overview.
   * Recording events:
   * 
   * - **2010**: The service status of the recording changes.
   * 
   * - **2011**: The status of the recording audio stream changes.
   * 
   * - **2012**: The status of the recording video stream changes.
   */
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
  /**
   * @remarks
   * A list of subscribed events for the application.
   */
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

