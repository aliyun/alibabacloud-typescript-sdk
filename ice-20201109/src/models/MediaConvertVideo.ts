// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertVideo extends $dara.Model {
  bitrate?: number;
  bufsize?: number;
  codec?: string;
  crf?: any;
  crop?: string;
  fps?: any;
  gop?: any;
  height?: number;
  longShortMode?: boolean;
  maxFps?: any;
  maxrate?: number;
  pad?: string;
  profile?: string;
  qscale?: number;
  remove?: boolean;
  scanMode?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bufsize: 'number',
      codec: 'string',
      crf: 'any',
      crop: 'string',
      fps: 'any',
      gop: 'any',
      height: 'number',
      longShortMode: 'boolean',
      maxFps: 'any',
      maxrate: 'number',
      pad: 'string',
      profile: 'string',
      qscale: 'number',
      remove: 'boolean',
      scanMode: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

