// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInventorySynchronizationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * @example
   * sync_xxxxxxxxxx
   */
  inventorySynchronizationJobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inventorySynchronizationJobId: 'InventorySynchronizationJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventorySynchronizationJobId: 'string',
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

