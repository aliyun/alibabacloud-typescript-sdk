// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSlowSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testdb01
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as *yyyy-MM-dd*T*HH:mm*Z. The time must be in UTC. The end time must be later than the start time.
   * 
   * Defaults to the current time
   * 
   * @example
   * 2024-12-04T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The longest execution duration. Unit: seconds.
   * 
   * @example
   * 600
   */
  maxDuration?: string;
  /**
   * @remarks
   * The minimum execution duration. Unit: seconds.
   * 
   * @example
   * 10
   */
  minDuration?: string;
  /**
   * @remarks
   * Sort criteria.
   * 
   * @example
   * {Field: SchemaName, Type: Desc}
   */
  orderBy?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC and formatted as *yyyy-MM-dd*T*HH:mm*Z.
   * 
   * Defaults to the current time minus 5 minutes.
   * 
   * @example
   * 2024-12-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxDuration: 'MaxDuration',
      minDuration: 'MinDuration',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      keyword: 'string',
      maxDuration: 'string',
      minDuration: 'string',
      orderBy: 'string',
      regionId: 'string',
      startTime: 'string',
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

