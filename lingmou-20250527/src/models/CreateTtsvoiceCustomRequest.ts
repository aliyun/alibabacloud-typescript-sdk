// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTTSVoiceCustomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestTTSVoiceName.mp3
   */
  fileName?: string;
  /**
   * @example
   * FEMALE
   */
  gender?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TestTTSVoiceName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * material/INPUT_TRAIN_AUDIO/Mt.CN2VNOPRC5QU2
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      gender: 'gender',
      name: 'name',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      gender: 'string',
      name: 'string',
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

