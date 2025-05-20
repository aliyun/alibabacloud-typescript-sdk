// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueueRequestTag } from "./ListQueueRequestTag";


export class ListQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 100000000. If you set this parameter to a value smaller than 1, the value of this parameter is 1 by default. If you set this parameter to a value greater than 100000000, the value of this parameter is 100000000 by default.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Value values: 10 to 50. If you set this parameter to a value smaller than 10, the value of this parameter is 10 by default. If you set this parameter to a value greater than 50, the value of this parameter is 50 by default.
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
   * The tags.
   */
  tag?: ListQueueRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queueName: 'string',
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

