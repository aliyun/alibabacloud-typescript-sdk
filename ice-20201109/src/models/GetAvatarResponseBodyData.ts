// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAvatarResponseBodyDataAvatar } from "./GetAvatarResponseBodyDataAvatar";


export class GetAvatarResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the digital human.
   */
  avatar?: GetAvatarResponseBodyDataAvatar;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: GetAvatarResponseBodyDataAvatar,
    };
  }

  validate() {
    if(this.avatar && typeof (this.avatar as any).validate === 'function') {
      (this.avatar as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

