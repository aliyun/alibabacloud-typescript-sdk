// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreateTableSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 109462AF-B5FA-3D5A-9377-B27E5B******
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * create table (
   *  id varchar(32)
   * );
   */
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

