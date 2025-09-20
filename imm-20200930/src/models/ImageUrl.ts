// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageURL extends $dara.Model {
  thumbnail?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      thumbnail: 'Thumbnail',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thumbnail: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

