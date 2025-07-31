// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDBsResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBodyDatabases extends $dara.Model {
  database?: DescribeBackupDBsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeBackupDBsResponseBodyDatabasesDatabase },
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

export class DescribeBackupDBsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  databases?: DescribeBackupDBsResponseBodyDatabases;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AF0AD89-ED4F-44AD-B65F-BFC1D5CD9455
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned databases.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeBackupDBsResponseBodyDatabases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

