// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-xxxxxxxx
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 642F3512-C628-5D0C-8815-F6670CEA00D4
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

