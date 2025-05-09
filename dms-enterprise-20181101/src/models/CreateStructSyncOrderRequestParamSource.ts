// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructSyncOrderRequestParamSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 4324532
   */
  dbId?: number;
  /**
   * @remarks
   * The name that is used to search for the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbSearchName?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The version number of the schema. The default value is the latest schema version number. For more information, see [Manage schema versions](https://help.aliyun.com/document_detail/202275.html).
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      logic: 'Logic',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbSearchName: 'string',
      logic: 'boolean',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

