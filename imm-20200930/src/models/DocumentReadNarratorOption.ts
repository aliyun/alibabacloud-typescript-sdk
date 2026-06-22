// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentReadNarratorOption extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the document narration feature. Set to `true` to enable narration. Defaults to `false`.
   */
  narrate?: boolean;
  static names(): { [key: string]: string } {
    return {
      narrate: 'Narrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      narrate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

