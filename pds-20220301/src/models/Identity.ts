// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Identity extends $dara.Model {
  identityId?: string;
  /**
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

