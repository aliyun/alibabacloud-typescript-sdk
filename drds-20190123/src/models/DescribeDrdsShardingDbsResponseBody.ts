// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a transaction to wait for the release of the data lock.
   * 
   * @example
   * 5000
   */
  blockingTimeout?: number;
  /**
   * @remarks
   * The URL that is used to access the Apsara RDS for MySQL instance.
   * 
   * @example
   * 100.100.64.100:11569
   */
  connectUrl?: string;
  /**
   * @remarks
   * The properties of the connection string.
   * 
   * @example
   * connectTimeout=3000;autoReconnect=true;failOverReadOnly=false;socketTimeout=900000;rewriteBatchedStatements=true;characterEncoding=utf8
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The ID of the Apsara RDS for MySQL instance that is used as the storage of the database shard.
   * 
   * @example
   * rm-bp1hjzn0yv5j2****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The status of the database.
   * 
   * @example
   * running
   */
  dbStatus?: string;
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
   * The name of group on which the database shard is stored.
   * 
   * @example
   * TEMP1_1568171495522SABE_KUP4_0000
   */
  groupName?: string;
  /**
   * @remarks
   * The timeout period of an idle connection.
   * 
   * @example
   * 30
   */
  idleTimeOut?: number;
  /**
   * @remarks
   * The maximum size of the connection pool.
   * 
   * @example
   * 60
   */
  maxPoolSize?: number;
  /**
   * @remarks
   * The minimum size of the connection pool.
   * 
   * @example
   * 5
   */
  minPoolSize?: number;
  /**
   * @remarks
   * The size of cache for the returned results.
   * 
   * @example
   * 0
   */
  preparedStatementCacheSize?: number;
  /**
   * @remarks
   * The name of the database shard.
   * 
   * @example
   * temp1_zhk1_0000
   */
  shardingDbName?: string;
  /**
   * @remarks
   * The username that is used to connect to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * pg284mi8
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      blockingTimeout: 'BlockingTimeout',
      connectUrl: 'ConnectUrl',
      connectionProperties: 'ConnectionProperties',
      dbInstanceId: 'DbInstanceId',
      dbStatus: 'DbStatus',
      dbType: 'DbType',
      groupName: 'GroupName',
      idleTimeOut: 'IdleTimeOut',
      maxPoolSize: 'MaxPoolSize',
      minPoolSize: 'MinPoolSize',
      preparedStatementCacheSize: 'PreparedStatementCacheSize',
      shardingDbName: 'ShardingDbName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockingTimeout: 'number',
      connectUrl: 'string',
      connectionProperties: 'string',
      dbInstanceId: 'string',
      dbStatus: 'string',
      dbType: 'string',
      groupName: 'string',
      idleTimeOut: 'number',
      maxPoolSize: 'number',
      minPoolSize: 'number',
      preparedStatementCacheSize: 'number',
      shardingDbName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbs extends $dara.Model {
  shardingDb?: DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb[];
  static names(): { [key: string]: string } {
    return {
      shardingDb: 'ShardingDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardingDb: { 'type': 'array', 'itemType': DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb },
    };
  }

  validate() {
    if(Array.isArray(this.shardingDb)) {
      $dara.Model.validateArray(this.shardingDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of database shards returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 509BDE17-505A-4B3B-854D-30D3F092502F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned database shards.
   */
  shardingDbs?: DescribeDrdsShardingDbsResponseBodyShardingDbs;
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
   * The number of returned database shards.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      shardingDbs: 'ShardingDbs',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      shardingDbs: DescribeDrdsShardingDbsResponseBodyShardingDbs,
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.shardingDbs && typeof (this.shardingDbs as any).validate === 'function') {
      (this.shardingDbs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

