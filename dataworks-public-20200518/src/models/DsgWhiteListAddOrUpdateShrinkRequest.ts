// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgWhiteListAddOrUpdateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of whitelists.
   * 
   * This parameter is required.
   */
  whiteListsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      whiteListsShrink: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

