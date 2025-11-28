// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @example
   * testdatabase
   */
  databaseName?: string;
  /**
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
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  databases?: ListInstanceDatabasesResponseBodyDatabases[];
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
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

