// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the tasks that are canceled. Multiple task IDs are separated with commas (,).
   * 
   * @example
   * 188****,188****,188****
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A807C95D-410C-5BB5-96C0-C6E09F2C3D36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
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

