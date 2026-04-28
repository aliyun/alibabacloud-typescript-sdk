// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Identity extends $dara.Model {
  /**
   * @remarks
   * The ID of the user or the group.
   * 
   * @example
   * 16435bdf934248b788b7b3771ee9a3dw
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the identity. Valid values:
   * 
   * *   IT_User
   * *   IT_Group
   * 
   * @example
   * IT_User
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

