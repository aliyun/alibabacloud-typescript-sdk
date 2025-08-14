// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelAssemblyChannelOutPutConfigList extends $dara.Model {
  channelName?: string;
  format?: string;
  manifestName?: string;
  manifestSettings?: string;
  playbackUrl?: string;
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

export class ChannelAssemblyChannel extends $dara.Model {
  accessPolicy?: boolean;
  accessToken?: string;
  arn?: string;
  channelName?: string;
  channelTier?: string;
  fillerSourceLocationName?: string;
  fillerSourceName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  outPutConfigList?: ChannelAssemblyChannelOutPutConfigList[];
  playbackMode?: string;
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
      outPutConfigList: { 'type': 'array', 'itemType': ChannelAssemblyChannelOutPutConfigList },
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

