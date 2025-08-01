// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMFAInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

