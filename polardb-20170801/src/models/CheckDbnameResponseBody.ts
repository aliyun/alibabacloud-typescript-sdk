// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDBNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
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

