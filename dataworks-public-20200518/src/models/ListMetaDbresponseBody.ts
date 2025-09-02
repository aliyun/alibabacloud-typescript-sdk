// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaDBResponseBodyDatabaseInfoDbList extends $dara.Model {
  /**
   * @remarks
   * The timestamp at which the metadatabase was created. You can convert the timestamp to the date based on the time zone that you use.
   * 
   * @example
   * 1388776825
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The URL of the metadatabase.
   * 
   * @example
   * hdfs://localhost:777/user/hadoop/test.txt
   */
  location?: string;
  /**
   * @remarks
   * The timestamp at which the metadatabase was updated.
   * 
   * @example
   * 1388776837
   */
  modifiedTimeStamp?: number;
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1232
   */
  ownerId?: string;
  /**
   * @remarks
   * The type of the metadatabase.
   * 
   * @example
   * HIVE
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the metadatabase.
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
   * The metadatabases.
   */
  dbList?: ListMetaDBResponseBodyDatabaseInfoDbList[];
  /**
   * @remarks
   * The total number of the metadatabases returned.
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
   * The information about the metadatabases.
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

