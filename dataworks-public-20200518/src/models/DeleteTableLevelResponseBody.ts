// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table level was deleted.
   * 
   * @example
   * true
   */
  deleteResult?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abcde
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'boolean',
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

