// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the database. You can obtain this value by calling ListAgenticDatabase or SearchAgenticDatabase.
   * 
   * This parameter is required.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  static names(): { [key: string]: string } {
    return {
      databaseUuid: 'DatabaseUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

