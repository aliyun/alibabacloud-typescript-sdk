// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints } from "./ListLivePackageChannelsResponseBodyLivePackageChannelsIngestEndpoints";


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

