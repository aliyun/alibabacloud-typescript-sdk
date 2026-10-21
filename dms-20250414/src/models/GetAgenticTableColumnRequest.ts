// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticTableColumnRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the database to which the table belongs. You can obtain the UUID by calling the ListAgenticDatabase or SearchAgenticDatabase operation.
   * 
   * This parameter is required.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The fully qualified name of the table. You can obtain the name from the QualifiedName parameter returned by the ListAgenticTableBaseInfo operation. You must specify the complete name.
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

