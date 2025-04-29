// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvUserSaveShrinkRequest extends $dara.Model {
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userListShrink: 'user_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

