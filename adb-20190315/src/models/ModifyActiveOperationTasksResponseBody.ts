// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The O\\&M event IDs that are separated by commas (,).
   * 
   * @example
   * 1
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B709A33-5E8D-511F-A225-AFC0B6AAAD76
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

