// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisDimensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bt6u59zcmd945****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1625220213000
   */
  endTime?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can be a combination of the `Type` and `Value` fields or a combination of the Type, `Min`, and `Max` fields. Specify the conditions in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements, **including successful and failed SQL statements**. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"maxCost","Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > Only data within the last 14 days can be queried. If you call this operation to query data that is earlier than 14 days, an empty string is returned.
   * 
   * This parameter is required.
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

