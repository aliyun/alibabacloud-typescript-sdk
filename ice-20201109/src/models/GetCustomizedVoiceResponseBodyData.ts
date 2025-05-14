// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomizedVoiceResponseBodyDataCustomizedVoice } from "./GetCustomizedVoiceResponseBodyDataCustomizedVoice";


export class GetCustomizedVoiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The personalized human voice.
   */
  customizedVoice?: GetCustomizedVoiceResponseBodyDataCustomizedVoice;
  static names(): { [key: string]: string } {
    return {
      customizedVoice: 'CustomizedVoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoice: GetCustomizedVoiceResponseBodyDataCustomizedVoice,
    };
  }

  validate() {
    if(this.customizedVoice && typeof (this.customizedVoice as any).validate === 'function') {
      (this.customizedVoice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

