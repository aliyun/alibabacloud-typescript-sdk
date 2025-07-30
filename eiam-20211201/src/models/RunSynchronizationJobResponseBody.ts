// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSynchronizationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9nj9xxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

