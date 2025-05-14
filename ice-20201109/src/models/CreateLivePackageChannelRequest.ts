// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name. It can contain letters, digits, hyphens (-), and underscores (_). The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The channel description. It can be up to 1,000 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The channel group name. It can contain letters, digits, hyphens (-), and underscores (_). The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The ingest protocol. Only HLS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of M3U8 segments. Valid values: 2 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration. Valid values: 1 to 30.
   * 
   * This parameter is required.
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

