// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation interval in minutes. The system creates aggregation tasks based on this interval.
   */
  aggIntervalMins?: number;
  /**
   * @remarks
   * The destination Logstore for the aggregated data from the materialized view.
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the materialized view. The name must be unique within the project, 2 to 63 characters long, and contain only lowercase letters, digits, hyphens (-), and underscores (_). It must also start and end with a lowercase letter or a digit.
   */
  name?: string;
  /**
   * @remarks
   * The query statement that defines the materialized view.
   */
  originalSql?: string;
  /**
   * @remarks
   * The time when the materialized view starts to aggregate data. Specify the time as a UNIX timestamp in seconds.
   */
  startTime?: number;
  /**
   * @remarks
   * The time-to-live (TTL) of the data in the materialized view, in days. After this period, the data expires and is automatically deleted.
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
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

