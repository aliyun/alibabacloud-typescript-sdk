// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteRouteEntriesResponseBodyFailedRouteEntries } from "./DeleteRouteEntriesResponseBodyFailedRouteEntries";


export class DeleteRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of route entries that failed to be deleted.
   * 
   * @example
   * 2
   */
  failedCount?: number;
  /**
   * @remarks
   * The information about the route entry that failed to be deleted.
   */
  failedRouteEntries?: DeleteRouteEntriesResponseBodyFailedRouteEntries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of route entries that were deleted.
   * 
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedRouteEntries: 'FailedRouteEntries',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedRouteEntries: { 'type': 'array', 'itemType': DeleteRouteEntriesResponseBodyFailedRouteEntries },
      requestId: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedRouteEntries)) {
      $dara.Model.validateArray(this.failedRouteEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

