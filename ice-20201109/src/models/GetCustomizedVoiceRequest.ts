// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizedVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

