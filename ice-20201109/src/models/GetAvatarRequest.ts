// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvatarRequest extends $dara.Model {
  /**
   * @remarks
   * *   The ID of the digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * Avatar-XXXX
   */
  avatarId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

