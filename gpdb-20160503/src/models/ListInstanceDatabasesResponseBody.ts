// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * *   Only contain letters, digits, and underscores (_).
   * *   Must start with a letter.
   * *   Up to 63 characters in length.
   * 
   * @example
   * testdatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The queried databases.
   */
  databases?: ListInstanceDatabasesResponseBodyDatabases[];
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      databases: { 'type': 'array', 'itemType': ListInstanceDatabasesResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

