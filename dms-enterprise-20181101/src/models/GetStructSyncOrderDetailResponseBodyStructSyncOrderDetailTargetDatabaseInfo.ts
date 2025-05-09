// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination database.
   * 
   * @example
   * 432543
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

