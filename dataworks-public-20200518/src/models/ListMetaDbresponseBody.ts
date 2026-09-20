// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaDBResponseBodyDatabaseInfoDbList extends $dara.Model {
  /**
   * @remarks
   * The time when the database was created. The value is a timestamp. You can convert the timestamp to a date based on your time zone.
   * 
   * @example
   * 1388776825
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The storage address of the database.
   * 
   * @example
   * hdfs://localhost:777/user/hadoop/test.txt
   */
  location?: string;
  /**
   * @remarks
   * The time when the database was last updated.
   * 
   * @example
   * 1388776837
   */
  modifiedTimeStamp?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 1232
   */
  ownerId?: string;
  /**
   * @remarks
   * The type of the database.
   * 
   * @example
   * HIVE
   */
  type?: string;
  /**
   * @remarks
   * The unique identifier of the database.
   * 
   * @example
   * 32342
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      location: 'Location',
      modifiedTimeStamp: 'ModifiedTimeStamp',
      name: 'Name',
      ownerId: 'OwnerId',
      type: 'Type',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      location: 'string',
      modifiedTimeStamp: 'number',
      name: 'string',
      ownerId: 'string',
      type: 'string',
      UUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBodyDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  dbList?: ListMetaDBResponseBodyDatabaseInfoDbList[];
  /**
   * @remarks
   * The total number of databases.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: { 'type': 'array', 'itemType': ListMetaDBResponseBodyDatabaseInfoDbList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dbList)) {
      $dara.Model.validateArray(this.dbList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database information.
   */
  databaseInfo?: ListMetaDBResponseBodyDatabaseInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInfo: 'DatabaseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInfo: ListMetaDBResponseBodyDatabaseInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.databaseInfo && typeof (this.databaseInfo as any).validate === 'function') {
      (this.databaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

