// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time, but not later than 00:00:00 (UTC+8) on the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1643040000000
   */
  end?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PolarDBMySQL**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region in which the instance resides. Valid values:
   * 
   * *   **cn-china**: Chinese mainland.
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-1**: Singapore.
   * 
   * This parameter takes effect only if **InstanceIds** is left empty. If you leave **InstanceIds** empty, the system obtains data from the region specified by **Region**. By default, Region is set to **cn-china**. If you specify **InstanceIds**, **Region** does not take effect and the system obtains data from the region in which the first specified instance resides.****
   * 
   * >  If your instances reside in the regions inside the Chinese mainland, set this parameter to **cn-china**.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can specify a start time up to two months earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642435200000
   */
  start?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  tagNames?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      start: 'Start',
      tagNames: 'TagNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      start: 'string',
      tagNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

