// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshVodObjectCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the purge task. Multiple task IDs are separated by commas (,).
   * The returned purge task IDs are merged based on the following rules:
   * 
   * Purge tasks (at URL granularity) submitted for the same domain name within the same second are merged into a single RefreshTaskId.
   * If purge tasks (at URL granularity) submitted for the same domain name within the same second exceed 2,000, they are merged into one RefreshTaskId per 2,000 tasks.
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

