// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbInstanceDbsResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a storage-layer database.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the description of the storage-layer database.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates the state of the storage-layer database. Valid values:
   * 
   * *   **0**: The database is being created.
   * *   **1**: The database is available.
   * *   **3**: The database is being deleted.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      description: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabases extends $dara.Model {
  database?: DescribeDbInstanceDbsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDbInstanceDbsResponseBodyDatabasesDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about the storage-layer databases.
   */
  databases?: DescribeDbInstanceDbsResponseBodyDatabases;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9F3D991-08DE-4B74-BE0E-06B809******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of storage-layer databases.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDbInstanceDbsResponseBodyDatabases,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.databases && typeof (this.databases as any).validate === 'function') {
      (this.databases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

