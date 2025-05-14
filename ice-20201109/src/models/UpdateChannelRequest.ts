// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChannelRequest extends $dara.Model {
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
   * MySource
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
  static names(): { [key: string]: string } {
    return {
      accessPolicy: 'AccessPolicy',
      accessToken: 'AccessToken',
      channelName: 'ChannelName',
      fillerSourceLocationName: 'FillerSourceLocationName',
      fillerSourceName: 'FillerSourceName',
      outPutConfigList: 'OutPutConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPolicy: 'boolean',
      accessToken: 'string',
      channelName: 'string',
      fillerSourceLocationName: 'string',
      fillerSourceName: 'string',
      outPutConfigList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

