// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCronClearOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  dbId?: number;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

