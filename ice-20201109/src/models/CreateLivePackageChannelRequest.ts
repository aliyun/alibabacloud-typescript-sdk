// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel. The name can contain only uppercase and lowercase letters, digits, hyphens, and underscores. It must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The client token used to ensure request idempotence.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the channel. It can be up to 1,000 characters in length.
   * 
   * @example
   * This is a test channel
   */
  description?: string;
  /**
   * @remarks
   * The name of the channel group. The name can contain only uppercase and lowercase letters, digits, hyphens, and underscores. It must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The ingest protocol. Valid values: HLS, HLS_CMAF, and SRT_RTMP. If you select SRT_RTMP, you must output the stream to this MediaPackage channel through MediaLive.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of m3u8 segments for the ingest stream. Valid values: 2 to 100. This parameter is required when the ingest protocol is HLS or HLS_CMAF.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration for the ingest stream. Valid values: 1 to 30. This parameter is required when the ingest protocol is HLS or HLS_CMAF.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      clientToken: 'ClientToken',
      description: 'Description',
      groupName: 'GroupName',
      protocol: 'Protocol',
      segmentCount: 'SegmentCount',
      segmentDuration: 'SegmentDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      clientToken: 'string',
      description: 'string',
      groupName: 'string',
      protocol: 'string',
      segmentCount: 'number',
      segmentDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

