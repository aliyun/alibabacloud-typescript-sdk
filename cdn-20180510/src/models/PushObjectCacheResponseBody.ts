// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushObjectCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the prefetch task. If multiple tasks are returned, the IDs are separated by commas (,). The task IDs are merged based on the following rules:
   * 
   * *   If the tasks are set for the same accelerated domain name, submitted within the same second, and prefetch content from URLs instead of directories, the tasks IDs are merged into the same task ID (RushTaskId).
   * *   If the number of tasks that are set for the same accelerated domain name, submitted within the same second, and prefetch content from URLs instead of directories exceeds 500, every 500 task IDs are merged into the same task ID (RushTaskId).
   * 
   * @example
   * 9524xxxx
   */
  pushTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushTaskId: 'PushTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

