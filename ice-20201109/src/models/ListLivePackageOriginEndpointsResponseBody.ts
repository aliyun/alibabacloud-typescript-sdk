// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * Abc123Def456
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is an origin endpoint
   */
  description?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * endpoint-1
   */
  endpointName?: string;
  /**
   * @remarks
   * The URL of the endpoint.
   * 
   * @example
   * https://xxx.packagepull-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest.m3u8
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The name of the channel group.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The IP blacklist.
   * 
   * @example
   * 10.21.222.1/32,192.168.100.0/24
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP whitelist.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1/24
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The time when the endpoint was last modified.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The name of the manifest.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The distribution protocol.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The time-shift duration in days.
   * 
   * @example
   * 1
   */
  timeshiftVision?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      channelName: 'ChannelName',
      createTime: 'CreateTime',
      description: 'Description',
      endpointName: 'EndpointName',
      endpointUrl: 'EndpointUrl',
      groupName: 'GroupName',
      ipBlacklist: 'IpBlacklist',
      ipWhitelist: 'IpWhitelist',
      lastModified: 'LastModified',
      manifestName: 'ManifestName',
      protocol: 'Protocol',
      timeshiftVision: 'TimeshiftVision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      channelName: 'string',
      createTime: 'string',
      description: 'string',
      endpointName: 'string',
      endpointUrl: 'string',
      groupName: 'string',
      ipBlacklist: 'string',
      ipWhitelist: 'string',
      lastModified: 'string',
      manifestName: 'string',
      protocol: 'string',
      timeshiftVision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivePackageOriginEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The live packaging origin endpoints.
   */
  livePackageOriginEndpoints?: ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * b9f90a7ac8904db28dc18e0c2a72c75d
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * - `asc`: Ascending order.
   * - `desc`: Descending order.
   * Default value: `desc`.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      livePackageOriginEndpoints: 'LivePackageOriginEndpoints',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageOriginEndpoints: { 'type': 'array', 'itemType': ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.livePackageOriginEndpoints)) {
      $dara.Model.validateArray(this.livePackageOriginEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

