// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 334
   */
  databaseId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98EDD923-236C-5A88-88E7-4979A91B9325
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
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

