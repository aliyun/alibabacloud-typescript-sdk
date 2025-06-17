// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshObjectCacheByCacheTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the refresh task. If multiple tasks are returned, the task IDs are separated by commas (,). The task IDs are merged based on the following rules:
   * 
   * *   If the tasks are specified for the same accelerated domain name, submitted within the same second, and run to refresh content based on URLs instead of directories, the task IDs are merged into one task ID (RefreshTaskId).
   * *   If the number of tasks that are specified for the same accelerated domain name, submitted within the same second, and run to refresh content based on URLs instead of directories exceeds 2,000, every 2,000 task IDs are merged into one task ID (RefreshTaskId).
   * 
   * @example
   * 17772470184
   */
  refreshTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2E5AD83F-BD7B-462E-8319-2E30E305519A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
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

