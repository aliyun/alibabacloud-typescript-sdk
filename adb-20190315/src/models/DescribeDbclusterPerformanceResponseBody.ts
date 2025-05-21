// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformances } from "./DescribeDbclusterPerformanceResponseBodyPerformances";


export class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *   "AuthAction": "xxx",
   *   "AuthPrincipalDisplayName": "sampleName",
   *   "AuthPrincipalOwnerId": "111111111111111111",
   *   "AuthPrincipalType": "SubUser",
   *   "AuthResource": "xxx",
   *   "NoPermissionType": "xxx",
   *   "PolicyType": "xxx"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

