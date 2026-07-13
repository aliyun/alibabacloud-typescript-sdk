// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value less than 1, the system uses 1 by default. If you set this parameter to a value greater than 100000000, the system uses 100000000 by default.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 10 to 50.
   * 
   * If you set this parameter to a value less than 10, the system uses 10 by default. If you set this parameter to a value greater than 50, the system uses 50 by default.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * demo-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The type of the queue. Valid values:
   *    * normal: standard queue
   *    * fifo: FIFO queue
   * 
   * @example
   * normal
   */
  queueType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: ListQueueRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      queueType: 'QueueType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queueName: 'string',
      queueType: 'string',
      tag: { 'type': 'array', 'itemType': ListQueueRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

