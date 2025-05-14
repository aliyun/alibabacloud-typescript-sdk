// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChannelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable access control.
   * 
   * @example
   * false
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
   * The name of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The tier of the channel. Valid values: basic and standard.
   * 
   * This parameter is required.
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
   * The name of the filler slate.
   * 
   * @example
   * FillerSource
   */
  fillerSourceName?: string;
  /**
   * @remarks
   * The channel output configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * [{
   * 	"ManifestName": "manifest-1",
   * 	"Format": "HLS",
   * 	"SourceGroupName": "source-group-1",
   * 	"ManifestSettings": {
   * 		"WindowDuration": 60,
   * 		"AdMarkType": "Daterange"
   * 	}
   * }]
   */
  outPutConfigList?: string;
  /**
   * @remarks
   * The playback mode. Valid values: loop and linear.
   * 
   * This parameter is required.
   * 
   * @example
   * loop
   */
  playbackMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessPolicy: 'AccessPolicy',
      accessToken: 'AccessToken',
      channelName: 'ChannelName',
      channelTier: 'ChannelTier',
      fillerSourceLocationName: 'FillerSourceLocationName',
      fillerSourceName: 'FillerSourceName',
      outPutConfigList: 'OutPutConfigList',
      playbackMode: 'PlaybackMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPolicy: 'boolean',
      accessToken: 'string',
      channelName: 'string',
      channelTier: 'string',
      fillerSourceLocationName: 'string',
      fillerSourceName: 'string',
      outPutConfigList: 'string',
      playbackMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

