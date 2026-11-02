// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the ingest endpoint.
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
   * The URL of the ingest endpoint.
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
   * The name of the channel.
   * 
   * @example
   * ch3
   */
  channelName?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and uses UTC time (ending with Z).
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the channel.
   * 
   * @example
   * Test channel
   */
  description?: string;
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
   * The array of ingest endpoints.
   */
  ingestEndpoints?: ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints[];
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The input protocol, such as HLS.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of m3u8 segments in the input stream.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The duration of segments in the input stream.
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
   * The list of real-time packaging channels.
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
   * The unique identifier of the request.
   * 
   * @example
   * Example value of RequestId
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. Valid values: asc (ascending) and desc (descending, default).
   * 
   * @example
   * asc/desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of records.
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

