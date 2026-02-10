// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterChannelsResponseBodyChannelsChannel extends $dara.Model {
  channelId?: string;
  faceBeauty?: string;
  resourceId?: string;
  rtmpUrl?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      faceBeauty: 'FaceBeauty',
      resourceId: 'ResourceId',
      rtmpUrl: 'RtmpUrl',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      faceBeauty: 'string',
      resourceId: 'string',
      rtmpUrl: 'string',
      streamUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseBodyChannels extends $dara.Model {
  channel?: DescribeCasterChannelsResponseBodyChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': DescribeCasterChannelsResponseBodyChannelsChannel },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterChannelsResponseBody extends $dara.Model {
  channels?: DescribeCasterChannelsResponseBodyChannels;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83C52866-281E-4AEA-9582-B124********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of channels.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeCasterChannelsResponseBodyChannels,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

