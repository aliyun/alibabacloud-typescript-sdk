// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertNotifyTemplatesResponseBody extends $dara.Model {
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
   * 0B9377D9-C56B-5C2E-A8A4-************
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

