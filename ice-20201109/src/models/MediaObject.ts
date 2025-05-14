// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaObject extends $dara.Model {
  media?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
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

