// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordingsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID. If this parameter is not specified, the screen recording files on all cloud computers in the designated region will be queried.
   * 
   * @example
   * ecd-hlh41mk78dugw****
   */
  desktopId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the `YYYYMMDDhhmmss` format. The time must be in UTC+8.
   * 
   * @example
   * 20230424004441
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to return a URL.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  needSignedUrl?: boolean;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The validity period of the returned URL. Unit: minutes.
   * 
   * @example
   * 10
   */
  signedUrlExpireMinutes?: number;
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the `yyyy-mm-ddthh:mm:ssz` format. The time must be in UTC+0.
   * 
   * @example
   * 2025-01-27T02:30:10Z
   */
  standardEndTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the `yyyy-mm-ddthh:mm:ssz` format. The time must be in UTC+0.
   * 
   * @example
   * 2025-01-27T02:20:10Z
   */
  standardStartTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the `YYYYMMDDhhmmss` format. The time must be in UTC+8.
   * 
   * @example
   * 20230424000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      needSignedUrl: 'NeedSignedUrl',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      signedUrlExpireMinutes: 'SignedUrlExpireMinutes',
      standardEndTime: 'StandardEndTime',
      standardStartTime: 'StandardStartTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endTime: 'string',
      maxResults: 'number',
      needSignedUrl: 'boolean',
      nextToken: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      signedUrlExpireMinutes: 'number',
      standardEndTime: 'string',
      standardStartTime: 'string',
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

