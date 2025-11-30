// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobOverwiteParamsSubtitles extends $dara.Model {
  codec?: string;
  static names(): { [key: string]: string } {
    return {
      codec: 'Codec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobOverwiteParams extends $dara.Model {
  subtitles?: MediaConvertJobOverwiteParamsSubtitles[];
  static names(): { [key: string]: string } {
    return {
      subtitles: 'Subtitles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitles: { 'type': 'array', 'itemType': MediaConvertJobOverwiteParamsSubtitles },
    };
  }

  validate() {
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

