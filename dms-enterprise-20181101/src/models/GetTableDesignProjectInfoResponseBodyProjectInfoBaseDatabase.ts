// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * poc_test
   */
  alias?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 11****
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * POLARDB
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   **product**: production environment.
   * *   **dev**: development environment.
   * *   **pre**: pre-release environment.
   * *   **test**: test environment.
   * *   **sit**: system integration testing (SIT) environment.
   * *   **uat**: user acceptance testing (UAT) environment.
   * *   **pet**: stress testing environment.
   * *   **stag**: staging environment.
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * bk_atc020
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * schema_name@127.0.XX.XX
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      schemaName: 'string',
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

