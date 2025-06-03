// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestRealtimeSubtitleTranslation extends $dara.Model {
  /**
   * @example
   * 1
   */
  translateLevel?: number;
  static names(): { [key: string]: string } {
    return {
      translateLevel: 'TranslateLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translateLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

