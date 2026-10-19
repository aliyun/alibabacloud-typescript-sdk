// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudLevelsRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine type. Valid values:
   * - MySQL
   * - PostgreSQL
   * - Oracle
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * Valid values for MySQL:
   * - 5.6
   * - 5.7
   * - 8.0
   * 
   * Valid values for PostgreSQL:
   * - 11
   * - 14
   * - 15
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The resource pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pj-87681rbcef6******
   */
  projectId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * This parameter is required.
   * 
   * @example
   * SharedStorage
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      projectId: 'ProjectId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      projectId: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

