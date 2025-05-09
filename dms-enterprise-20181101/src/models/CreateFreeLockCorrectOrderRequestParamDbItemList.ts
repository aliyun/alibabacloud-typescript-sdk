// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeLockCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. The database can be a physical database or a logical database.
   * 
   * *   To obtain the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To obtain the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
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

