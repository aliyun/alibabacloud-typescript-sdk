// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * User Information
   */
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

