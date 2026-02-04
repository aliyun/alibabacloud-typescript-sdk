// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBroadcastAudioRequest extends $dara.Model {
  /**
   * @example
   * audio.mp3
   */
  fileName?: string;
  /**
   * @example
   * material/INPUT_BROADCAST_INFER_AUDIO/Mt.CPRLVQRR27YU2
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

