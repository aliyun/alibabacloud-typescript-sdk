// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterChannelsResponseBodyChannelsChannel extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * The layout references the channel ID when the channel is enabled. You can specify up to one video resource for the channel. The value of this parameter must be in the RV[Number] format, such as RV01 and RV12.
   * 
   * @example
   * RV01
   */
  channelId?: string;
  /**
   * @remarks
   * The face retouching effect. Valid values: 0 (all effects), 1 (skin smoothing), 2 (skin whitening), 3 (dark circles removal), and 4 (nasolabial folds removal).
   * 
   * @example
   * 0
   */
  faceBeauty?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * @example
   * 87642866-281E-4AEA-9582-B124879****
   */
  resourceId?: string;
  /**
   * @remarks
   * The URL in the Real-Time Messaging Protocol (RTMP) format.
   * 
   * @example
   * rtmp://demo.aliyundoc.com/caster/rtmperf?auth_key=****
   */
  rtmpUrl?: string;
  /**
   * @remarks
   * The URL of the output content in the channel.
   * 
   * @example
   * http://demo.aliyundoc.com/caster/streamwsx.flv?auth_key=YYYYY
   */
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
  /**
   * @remarks
   * The channels.
   */
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

