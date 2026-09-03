// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordingsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID. If you do not specify this parameter, all cloud computers in the region are queried.
   * 
   * @example
   * ecd-hlh41mk78dugw****
   */
  desktopId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in UTC+8 in the `YYYYMMDDhhmmss` format.
   * 
   * @example
   * 20230424004441
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
   * Specifies whether to return the URL.
   * 
   * @example
   * false
   */
  needSignedUrl?: boolean;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call to this operation. You do not need to set this parameter for the first request.
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
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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
   * The end time of the query. Specify the time in the ISO 8601 standard in UTC+0 in the `yyyy-mm-ddthh:mm:ssz` format.
   * 
   * @example
   * 2025-01-27T02:30:10Z
   */
  standardEndTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in UTC+0 in the `yyyy-mm-ddthh:mm:ssz` format.
   * 
   * @example
   * 2025-01-27T02:20:10Z
   */
  standardStartTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in UTC+8 in the `YYYYMMDDhhmmss` format.
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

