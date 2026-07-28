// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmbodiedAIPlatformsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of platform creation, used to filter query results. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-12-01T03:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * Use PageSize and PageNumber for pagination.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * Use PageSize and PageNumber for pagination.
   * 
   * @example
   * 298a7d5473b128dfe0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the embodied intelligence multimodal data platform.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of platform creation, used to filter query results. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-12-01T02:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the platform.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platformName: 'PlatformName',
      regionId: 'RegionId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platformName: 'string',
      regionId: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

