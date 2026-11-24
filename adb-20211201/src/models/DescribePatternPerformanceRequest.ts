// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all clusters in the specified region, including the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6li1r3do8m****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * > You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query the list of all SQL patterns in the specified cluster within a specified time period, including the SQL pattern IDs.
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
   * The start time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mm:ssZ</i> format.
   * >  - If the current date is August 22, 2022 (UTC+8), the earliest data you can query is from August 9, 2022 (UTC+8), which corresponds to 2022-08-08T16:00:00Z in UTC. If the specified start time is earlier than August 9, 2022 (UTC+8) or 2022-08-08T16:00:00Z in UTC, an empty response is returned.
   * - The interval between the start time and the end time of the query cannot exceed 24 hours.
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

