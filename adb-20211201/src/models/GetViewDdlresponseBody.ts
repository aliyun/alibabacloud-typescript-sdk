// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetViewDDLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 421794A3-72A5-5D27-9E8B-A75A4C503E17
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * CREATE VIEW `test`.`test_view` AS SELECT
   *   `id`
   * , `name`
   * FROM
   *   `test_tbl_adb`
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

