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

