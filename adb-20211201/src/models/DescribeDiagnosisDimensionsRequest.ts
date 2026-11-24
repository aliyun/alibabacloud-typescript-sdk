// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisDimensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (3.0) clusters in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bt6u59zcmd945****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * > * The end time must be later than the start time.
   * > * The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 1625220213000
   */
  endTime?: string;
  /**
   * @remarks
   * The language configuration. Valid values:
   * - **zh-CN**: Simplified Chinese (default).
   * - **en-US**: English.
   * - **ja**: Japanese.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The search conditions for SQL queries. The value is a JSON string that contains fields such as `Type`, `Value`, `Min`, and `Max`. The `Type` field specifies the query dimension. Valid values: `maxCost`, `status`, and `cost`. The `Value`, `Min`, or `Max` field specifies the query range for the dimension. Valid values:
   * - `{"Type":"maxCost","Value":"100"}`: queries the details of the top 100 SQL statements with the longest execution duration. Currently, you can only set `Value` to 100.
   * - `{"Type":"status","Value":"finished"}`: queries the details of completed SQL statements. You can also set `Value` to `running` or `failed` to query the details of running or failed SQL statements.
   * - `{"Type":"cost","Min":"10","Max":"200"}`: queries the details of SQL statements whose execution duration is between 10 milliseconds and 200 milliseconds. You can also customize the minimum and maximum execution duration in milliseconds.
   * 
   * @example
   * {"Type":"maxCost","Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of the specified AnalyticDB for MySQL Data Lakehouse Edition (3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time as a UNIX timestamp in milliseconds.
   * > You can only query data from the last 14 days. If you query data from more than 14 days ago, an empty result is returned.
   * 
   * @example
   * 1625220210000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

