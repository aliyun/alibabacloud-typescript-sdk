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
   * The channel name.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The endpoint description.
   */
  description?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-1
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint URL.
   * 
   * @example
   * https://xxx.packagepull-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest.m3u8
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The channel group name.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The IP address blacklist.
   * 
   * @example
   * 10.21.222.1/32,192.168.100.0/24
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP address whitelist.
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
   * The playlist name.
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
   * The number of days that time-shifted content is available.
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
   * The origin endpoints returned.
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
   * The request ID.
   * 
   * @example
   * b9f90a7ac8904db28dc18e0c2a72c75d
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Valid values: `asc` and `desc` (default).
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

