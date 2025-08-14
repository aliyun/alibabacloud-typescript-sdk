// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ingest endpoint ID.
   * 
   * @example
   * ingest1
   */
  id?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * 2F9e9******18b569c8
   */
  password?: string;
  /**
   * @remarks
   * The ingest endpoint URL.
   * 
   * @example
   * http://xxx-1.packagepush-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest
   */
  url?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * us12******das
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      password: 'string',
      url: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivePackageChannelsResponseBodyLivePackageChannels extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * ch3
   */
  channelName?: string;
  /**
   * @remarks
   * The time when the channel was created.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The channel description.
   */
  description?: string;
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
   * The ingest endpoints.
   */
  ingestEndpoints?: ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints[];
  /**
   * @remarks
   * The time when the channel was last modified.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The ingest protocol. Only HLS is supported.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of M3U8 segments.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      ingestEndpoints: 'IngestEndpoints',
      lastModified: 'LastModified',
      protocol: 'Protocol',
      segmentCount: 'SegmentCount',
      segmentDuration: 'SegmentDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      ingestEndpoints: { 'type': 'array', 'itemType': ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints },
      lastModified: 'string',
      protocol: 'string',
      segmentCount: 'number',
      segmentDuration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ingestEndpoints)) {
      $dara.Model.validateArray(this.ingestEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivePackageChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The live package channels.
   */
  livePackageChannels?: ListLivePackageChannelsResponseBodyLivePackageChannels[];
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Valid values: asc and desc (default).
   * 
   * @example
   * asc/desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      livePackageChannels: 'LivePackageChannels',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannels: { 'type': 'array', 'itemType': ListLivePackageChannelsResponseBodyLivePackageChannels },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.livePackageChannels)) {
      $dara.Model.validateArray(this.livePackageChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

