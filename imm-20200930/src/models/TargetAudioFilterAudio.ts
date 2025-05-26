// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetAudioFilterAudio extends $dara.Model {
  mixing?: boolean;
  static names(): { [key: string]: string } {
    return {
      mixing: 'Mixing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixing: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

