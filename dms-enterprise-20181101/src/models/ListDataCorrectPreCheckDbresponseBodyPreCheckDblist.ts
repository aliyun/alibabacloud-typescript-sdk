// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCorrectPreCheckDBResponseBodyPreCheckDBList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 43***
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test@localhost:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The number of SQL statements.
   * 
   * @example
   * 1
   */
  sqlNum?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      searchName: 'SearchName',
      sqlNum: 'SqlNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      searchName: 'string',
      sqlNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

