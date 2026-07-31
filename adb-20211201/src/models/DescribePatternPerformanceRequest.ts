// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all clusters in a region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6li1r3do8m****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in UTC in the *yyyy-MM-ddTHH:mm:ssZ* format.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * 
   * > You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query information about all SQL patterns in a cluster within a specified time range, including the ID of each SQL pattern.
   * 
   * @example
   * 3847585356974******
   */
  patternId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in UTC in the *yyyy-MM-ddTHH:mm:ssZ* format.
   * 
   * > - You can query data from the last 14 days. If you specify a start time earlier than this period, an empty value is returned. For example, if the current date is August 22, 2022 (China Standard Time), the earliest valid start time is 2022-08-08T16:00:00Z.
   * 
   * - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      patternId: 'PatternId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      patternId: 'string',
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

