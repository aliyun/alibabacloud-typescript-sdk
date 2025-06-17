// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshObjectCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the refresh task. If multiple tasks are returned, the task IDs are separated by commas (,). The task IDs are merged based on the following rules:
   * 
   * *   If the tasks are specified for the same accelerated domain name, submitted within the same second, and run to refresh content based on URLs instead of directories, the task IDs are merged into one task ID (RefreshTaskId).
   * *   If the number of tasks that are specified for the same accelerated domain name, submitted within the same second, and run to refresh content based on URLs instead of directories exceeds 2,000, every 2,000 task IDs are merged into one task ID (RefreshTaskId).
   * 
   * @example
   * 704222904
   */
  refreshTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C
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

