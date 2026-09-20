// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The O&M task IDs. Multiple IDs are separated with commas (,).
   * 
   * @example
   * 1111,2222
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C9CC46A-9532-4752-B59F-580112C5A45B
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

