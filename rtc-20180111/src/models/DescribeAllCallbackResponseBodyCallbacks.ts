// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllCallbackResponseBodyCallbacksSubEvent } from "./DescribeAllCallbackResponseBodyCallbacksSubEvent";


export class DescribeAllCallbackResponseBodyCallbacks extends $dara.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 录制回调
   */
  name?: string;
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

