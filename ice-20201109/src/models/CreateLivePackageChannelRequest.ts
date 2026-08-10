// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name. The name can contain only uppercase and lowercase letters, digits, hyphens, and underscores. The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description. The description can be up to 1000 characters in length.
   * 
   * @example
   * This is a test channel.
   */
  description?: string;
  /**
   * @remarks
   * The channel group name. The name can contain only uppercase and lowercase letters, digits, hyphens, and underscores. The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The input protocol. Currently, only HLS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of m3u8 segments for the input stream. Valid values: 2 to 100.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration of the input stream, in seconds. Valid values: 1 to 30.
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

