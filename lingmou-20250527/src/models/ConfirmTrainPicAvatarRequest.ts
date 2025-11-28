// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmTrainPicAvatarRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M1_eTNYgO5lOys5g7ObvC_nw
   */
  avatarId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOMER_CONFIRMED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

