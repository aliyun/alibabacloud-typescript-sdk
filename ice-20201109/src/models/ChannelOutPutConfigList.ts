// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelOutPutConfigList extends $dara.Model {
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

