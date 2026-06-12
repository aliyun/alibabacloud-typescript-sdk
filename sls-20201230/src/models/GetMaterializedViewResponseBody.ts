// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterializedViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval for data aggregation, in minutes.
   */
  aggIntervalMins?: number;
  /**
   * @remarks
   * Specifies whether the materialized view is active. Valid values are `true` and `false`.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination logstore that stores the aggregated data.
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the materialized view.
   */
  name?: string;
  /**
   * @remarks
   * The SQL query that defines the materialized view.
   */
  originalSql?: string;
  /**
   * @remarks
   * The time when the materialized view was created. The value is a Unix timestamp.
   */
  startTime?: number;
  /**
   * @remarks
   * The time to live (ttl) of the data in the destination logstore, in days.
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      enabled: 'enabled',
      logstore: 'logstore',
      name: 'name',
      originalSql: 'originalSql',
      startTime: 'startTime',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      enabled: 'boolean',
      logstore: 'string',
      name: 'string',
      originalSql: 'string',
      startTime: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

