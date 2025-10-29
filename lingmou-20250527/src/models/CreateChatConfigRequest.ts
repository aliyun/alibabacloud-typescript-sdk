// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatConfigRequest extends $dara.Model {
  /**
   * @example
   * M1ONzwuILu-nPT7pvr6maKvQ
   */
  avatarId?: string;
  /**
   * @example
   * M1ONzwuILu-nPT7pvr6maKvQ
   */
  backgroundId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
      backgroundId: 'backgroundId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      backgroundId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

