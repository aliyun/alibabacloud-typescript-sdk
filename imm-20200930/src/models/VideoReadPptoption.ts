// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoReadPPTOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to extract content from the presentation slides. Set this parameter to `true` to enable extraction.
   */
  extract?: boolean;
  static names(): { [key: string]: string } {
    return {
      extract: 'Extract',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extract: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

