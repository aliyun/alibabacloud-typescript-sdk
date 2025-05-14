// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserAvatarRequest extends $dara.Model {
  /**
   * @example
   * @lADPDfYH3A-xxxx
   */
  avatarMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarMediaId: 'AvatarMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarMediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

