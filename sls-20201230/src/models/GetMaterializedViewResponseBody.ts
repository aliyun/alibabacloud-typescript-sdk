// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterializedViewResponseBodyStatusStats extends $dara.Model {
  /**
   * @remarks
   * The number of times the materialized view was used in the last day.
   * 
   * @example
   * 0
   */
  hits?: number;
  /**
   * @remarks
   * The top 3 most frequently accelerated SQL statements by the materialized view.
   * 
   * @example
   * []
   */
  queries?: string[];
  static names(): { [key: string]: string } {
    return {
      hits: 'hits',
      queries: 'queries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: 'number',
      queries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterializedViewResponseBodyStatus extends $dara.Model {
  /**
   * @remarks
   * The error message from the last execution of the materialized view.
   * 
   * @example
   * column \\"value\\" not defined
   */
  lastRunError?: string;
  /**
   * @remarks
   * The time when the materialized view was last executed.
   * 
   * @example
   * 1787647228
   */
  lastRunTime?: number;
  /**
   * @remarks
   * The latest position up to which the materialized view has processed data.
   * 
   * @example
   * 1787647228
   */
  maxCursorTime?: number;
  /**
   * @remarks
   * The execute statistics information of the materialized view.
   * 
   * @example
   * {}
   */
  stats?: GetMaterializedViewResponseBodyStatusStats;
  static names(): { [key: string]: string } {
    return {
      lastRunError: 'lastRunError',
      lastRunTime: 'lastRunTime',
      maxCursorTime: 'maxCursorTime',
      stats: 'stats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastRunError: 'string',
      lastRunTime: 'number',
      maxCursorTime: 'number',
      stats: GetMaterializedViewResponseBodyStatusStats,
    };
  }

  validate() {
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterializedViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The aggregation interval of the materialized view results, in minutes.
   * 
   * @example
   * 5
   */
  aggIntervalMins?: number;
  /**
   * @remarks
   * The time when the materialized view was created.
   * 
   * @example
   * 1722411060
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the materialized view is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Logstore from which the materialized view sources its data.
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * alert-123456
   */
  name?: string;
  /**
   * @remarks
   * The original SQL statement executed by the materialized view.
   * 
   * @example
   * * | select count(*) from log
   */
  originalSql?: string;
  /**
   * @remarks
   * The number of shards used by the Logstore that stores the materialized view data.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The time from which the materialized view starts processing data.
   * 
   * @example
   * 1448748198
   */
  startTime?: number;
  /**
   * @remarks
   * The status information of the materialized view.
   * 
   * @example
   * {}
   */
  status?: GetMaterializedViewResponseBodyStatus;
  /**
   * @remarks
   * The number of days that the materialized view results are retained.
   * 
   * @example
   * 1
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      createTime: 'createTime',
      enabled: 'enabled',
      logstore: 'logstore',
      name: 'name',
      originalSql: 'originalSql',
      shardCount: 'shardCount',
      startTime: 'startTime',
      status: 'status',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      createTime: 'number',
      enabled: 'boolean',
      logstore: 'string',
      name: 'string',
      originalSql: 'string',
      shardCount: 'number',
      startTime: 'number',
      status: GetMaterializedViewResponseBodyStatus,
      ttl: 'number',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

