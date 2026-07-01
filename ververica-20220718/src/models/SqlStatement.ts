// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlStatement extends $dara.Model {
  /**
   * @remarks
   * The index of the SQL statement.
   */
  index?: number;
  /**
   * @remarks
   * The message returned for the SQL statement.
   */
  message?: string;
  /**
   * @remarks
   * The SQL script content.
   */
  sqlScript?: string;
  /**
   * @remarks
   * The status of the SQL statement.
   */
  statusState?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      message: 'message',
      sqlScript: 'sqlScript',
      statusState: 'statusState',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      message: 'string',
      sqlScript: 'string',
      statusState: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

