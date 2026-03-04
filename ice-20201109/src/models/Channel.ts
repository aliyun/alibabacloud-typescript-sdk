// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelOutPutConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The format.
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The manifest name.
   * 
   * @example
   * index1
   */
  manifestName?: string;
  /**
   * @remarks
   * The manifest settings.
   * 
   * @example
   * {"WindowDuration": 60,"AdMarkType":"Daterange"}
   */
  manifestSettings?: string;
  /**
   * @remarks
   * The playback URL.
   * 
   * @example
   * https://xxxxx.com/xxx.m3u8
   */
  playbackUrl?: string;
  /**
   * @remarks
   * The name of the source group.
   * 
   * @example
   * group1
   */
  sourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      format: 'Format',
      manifestName: 'ManifestName',
      manifestSettings: 'ManifestSettings',
      playbackUrl: 'PlaybackUrl',
      sourceGroupName: 'SourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      format: 'string',
      manifestName: 'string',
      manifestSettings: 'string',
      playbackUrl: 'string',
      sourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Channel extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable access control.
   * 
   * @example
   * true
   */
  accessPolicy?: boolean;
  /**
   * @remarks
   * The token for accessing the channel.
   * 
   * @example
   * xxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The ARN of the channel.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:channel/myChannel
   */
  arn?: string;
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The tier of the channel.
   * 
   * @example
   * basic
   */
  channelTier?: string;
  /**
   * @remarks
   * The source location of the filler slate.
   * 
   * @example
   * MySourceLocation
   */
  fillerSourceLocationName?: string;
  /**
   * @remarks
   * The source name of the filler slate.
   * 
   * @example
   * MySource
   */
  fillerSourceName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-15T03:44:16Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-09-01T10:09Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output configurations.
   */
  outPutConfigList?: ChannelOutPutConfigList[];
  /**
   * @remarks
   * The playback mode.
   * 
   * @example
   * loop
   */
  playbackMode?: string;
  /**
   * @remarks
   * The state of the channel.
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      accessPolicy: 'AccessPolicy',
      accessToken: 'AccessToken',
      arn: 'Arn',
      channelName: 'ChannelName',
      channelTier: 'ChannelTier',
      fillerSourceLocationName: 'FillerSourceLocationName',
      fillerSourceName: 'FillerSourceName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      outPutConfigList: 'OutPutConfigList',
      playbackMode: 'PlaybackMode',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPolicy: 'boolean',
      accessToken: 'string',
      arn: 'string',
      channelName: 'string',
      channelTier: 'string',
      fillerSourceLocationName: 'string',
      fillerSourceName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      outPutConfigList: { 'type': 'array', 'itemType': ChannelOutPutConfigList },
      playbackMode: 'string',
      state: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outPutConfigList)) {
      $dara.Model.validateArray(this.outPutConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

