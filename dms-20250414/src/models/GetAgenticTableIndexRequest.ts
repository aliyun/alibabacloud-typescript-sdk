// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticTableIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the database to which the table belongs. You can obtain this value by calling ListAgenticDatabase or SearchAgenticDatabase.
   * 
   * This parameter is required.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The fully qualified name of the table. You can obtain this value from the QualifiedName parameter returned by ListAgenticTableBaseInfo. You must specify the full name.
   * 
   * This parameter is required.
   * 
   * @example
   * orders
   */
  tableQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseUuid: 'DatabaseUuid',
      tableQualifiedName: 'TableQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseUuid: 'string',
      tableQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

