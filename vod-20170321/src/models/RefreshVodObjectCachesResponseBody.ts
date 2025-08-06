// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshVodObjectCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the refresh task. Multiple IDs are separated by commas (,). Refresh tasks are merged based on the following rules:
   * 
   * If the tasks are set for the same accelerated domain name, submitted within the same second, and refresh content based on URLs instead of directories, the tasks IDs are merged into the same task ID (RefreshTaskId). If the number of these tasks exceeds 2,000, every 2,000 tasks IDs are merged into the same task ID (RefreshTaskId).
   * 
   * @example
   * 70422*****2904
   */
  refreshTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D61E4801-EAFF-4A63-****-FBF6CE1CFD1C
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

