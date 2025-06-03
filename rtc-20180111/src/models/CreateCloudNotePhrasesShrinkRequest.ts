// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudNotePhrasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phraseShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      phraseShrink: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      phraseShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

