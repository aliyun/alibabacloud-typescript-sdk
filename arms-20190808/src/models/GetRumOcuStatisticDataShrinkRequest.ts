// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumOcuStatisticDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1687849260000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter condition. Three types of filter conditions are provided:
   * 
   * *   Application name: pid (Note that the application name is displayed, but the application ID is actually specified)
   * *   Application type: siteType
   * *   Data type: dataType
   */
  filterShrink?: string;
  /**
   * @remarks
   * The grouping fields. Valid values:
   * 
   * *   siteType: The total number of OCUs is grouped by application type.
   * *   dataType: The total number of OCUs is grouped by data type.
   * *   pid: The total number of OCUs is grouped by application ID.
   * *   appName: The total number of OCUs is grouped by application name.
   * *   startTime: The total number of OCUs is grouped by start time.
   */
  groupShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the query. To query non-time series data, set the value to INSTANT. To query time series data, set the value to TIME_SERIES.
   * 
   * @example
   * TIME_SERIES
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1600063200000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterShrink: 'Filter',
      groupShrink: 'Group',
      page: 'Page',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filterShrink: 'string',
      groupShrink: 'string',
      page: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

