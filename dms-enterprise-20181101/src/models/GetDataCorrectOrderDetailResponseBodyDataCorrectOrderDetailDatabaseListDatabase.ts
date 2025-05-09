// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseListDatabase extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * The engine of the database.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   product: production environment.
   * *   dev: development environment.
   * *   pre: pre-release environment.
   * *   test: test environment.
   * *   sit: system integration testing (SIT) environment
   * *   uat: user acceptance testing (UAT) environment.
   * *   pet: stress testing environment.
   * *   stag: staging environment.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true.**: The database is a logical database.
   * *   **false**: The database is a physical database.
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
   * xxx@xxx:3306
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

