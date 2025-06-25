// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseResponseBodyDatabase } from "./GetDatabaseResponseBodyDatabase";


export class GetDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned detailed information about the database.
   */
  database?: GetDatabaseResponseBodyDatabase;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D72B883-9D15-5B05-B987-DFD10EB1FFB4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetDatabaseResponseBodyDatabase,
      requestId: 'string',
    };
  }

  validate() {
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

