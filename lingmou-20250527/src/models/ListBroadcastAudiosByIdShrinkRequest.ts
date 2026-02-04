// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBroadcastAudiosByIdShrinkRequest extends $dara.Model {
  audioIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      audioIdsShrink: 'audioIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

