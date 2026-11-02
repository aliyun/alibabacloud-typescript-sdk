// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actual number of deleted records.
   * 
   * @example
   * 0
   */
  deletedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletedCount: 'deletedCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedCount: 'number',
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

