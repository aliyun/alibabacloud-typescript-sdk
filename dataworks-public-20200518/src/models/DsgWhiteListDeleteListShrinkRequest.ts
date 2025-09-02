// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgWhiteListDeleteListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the whitelists.
   * 
   * This parameter is required.
   */
  idsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

