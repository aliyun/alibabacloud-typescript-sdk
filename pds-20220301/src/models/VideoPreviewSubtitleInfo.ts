// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoPreviewSubtitleInfo extends $dara.Model {
  language?: string;
  status?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

