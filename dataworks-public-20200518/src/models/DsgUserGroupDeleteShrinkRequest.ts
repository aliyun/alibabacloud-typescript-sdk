// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupDeleteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the user group.
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

