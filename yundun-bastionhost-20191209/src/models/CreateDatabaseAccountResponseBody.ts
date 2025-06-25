// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account.
   * 
   * @example
   * 40
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B07C465D-B09F-54DD-8FEC-90788BEABAFC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
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

