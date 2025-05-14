// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints } from "./UpdateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints";


export class UpdateLivePackageChannelResponseBodyLivePackageChannel extends $dara.Model {
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
   * The time when the channel was created.
   * 
   * @example
   * 2024-07-16T02:24:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The channel description. It can be up to 1,000 characters in length.
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
  ingestEndpoints?: UpdateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints[];
  /**
   * @remarks
   * The time when the channel was last modified.
   * 
   * @example
   * 2024-07-16T02:24:42Z
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
   * The number of segments.
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
      ingestEndpoints: { 'type': 'array', 'itemType': UpdateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints },
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

