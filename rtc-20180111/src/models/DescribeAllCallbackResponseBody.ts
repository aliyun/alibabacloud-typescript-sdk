// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllCallbackResponseBodyCallbacksSubEvent extends $dara.Model {
  /**
   * @remarks
   * Subscribed sub-event code.
   * 
   * @example
   * 2000
   */
  event?: number;
  /**
   * @remarks
   * Subscribed sub-event name.
   * 
   * @example
   * 录制开始
   */
  eventName?: string;
  /**
   * @remarks
   * Subscription event type: 0 for system, 1 for custom.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventName: 'EventName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'number',
      eventName: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponseBodyCallbacks extends $dara.Model {
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 录制回调
   */
  name?: string;
  /**
   * @remarks
   * List of subscribed sub-events.
   */
  subEvent?: DescribeAllCallbackResponseBodyCallbacksSubEvent[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      name: 'Name',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      name: 'string',
      subEvent: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacksSubEvent },
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

export class DescribeAllCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of callback events.
   */
  callbacks?: DescribeAllCallbackResponseBodyCallbacks[];
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
      callbacks: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacks },
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

