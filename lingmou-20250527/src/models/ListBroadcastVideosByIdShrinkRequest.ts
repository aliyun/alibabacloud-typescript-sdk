// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBroadcastVideosByIdShrinkRequest extends $dara.Model {
  videoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      videoIdsShrink: 'videoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

