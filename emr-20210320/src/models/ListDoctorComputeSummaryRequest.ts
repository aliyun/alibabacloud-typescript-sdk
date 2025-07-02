// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorComputeSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The resource types, which are used to filter query results. Valid values:
   * 
   * *   engine: filters results by engine.
   * *   queue: filters results by queue.
   * *   cluster: displays the results at the cluster level.
   * 
   * If you do not specify this parameter, the information at the cluster level is displayed by default. Currently, only one resource type is supported. If you specify multiple resource types, the first resource type is used by default.
   * 
   * @example
   * null
   */
  componentTypes?: string[];
  /**
   * @remarks
   * Specify the date in the ISO 8601 standard. For example, 2023-01-01 represents January 1, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The basis on which you want to sort the query results. Valid values:
   * 
   * 1.  vcoreSeconds: the total CPU consumption over time in seconds.
   * 2.  memSeconds: the total memory consumption over time in seconds.
   * 3.  vcoreUtilization: the average CPU utilization. The meaning is the same as the %CPU parameter in the output of the top command in Linux.
   * 4.  memUtilization: the average memory usage.
   * 5.  vcoreSecondsDayGrowthRatio: the day-to-day growth rate of the total CPU consumption over time in seconds.
   * 6.  memSecondsDayGrowthRatio: the day-to-day growth rate of the total memory consumption over time in seconds.
   * 7.  readSize: the total amount of data read from the file system.
   * 8.  writeSize: the total amount of data written to the file system.
   * 9.  healthyJobCount: the total number of healthy jobs.
   * 10. subHealthyJobCount: the total number of sub-healthy jobs.
   * 11. unhealthyJobCount: the total number of unhealthy jobs.
   * 12. needAttentionJobCount: the total number of jobs that require attention.
   * 13. score: the score for jobs.
   * 14. scoreDayGrowthRatio: the day-to-day growth rate of the score for jobs.
   * 
   * @example
   * score
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   ASC: in ascending order.
   * *   DESC: in descending order.
   * 
   * @example
   * ASC
   */
  orderType?: string;
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentTypes: 'ComponentTypes',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentTypes: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentTypes)) {
      $dara.Model.validateArray(this.componentTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

