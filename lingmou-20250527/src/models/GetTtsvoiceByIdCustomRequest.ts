// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTTSVoiceByIdCustomRequest extends $dara.Model {
  /**
   * @example
   * M1ScGtY****PBFEJHdUV1thQ
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      voiceId: 'voiceId',
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

