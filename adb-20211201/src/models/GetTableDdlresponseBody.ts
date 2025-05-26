// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDDLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0******
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

