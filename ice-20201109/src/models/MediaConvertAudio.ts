// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertAudio extends $dara.Model {
  bitrate?: number;
  channels?: number;
  codec?: string;
  profile?: string;
  remove?: boolean;
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      remove: 'Remove',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      channels: 'number',
      codec: 'string',
      profile: 'string',
      remove: 'boolean',
      samplerate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

