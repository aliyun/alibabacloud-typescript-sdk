// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainPicAvatarStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M1YJTNTH2yoLmLnzKdYHeGBg
   */
  avatarId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
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

