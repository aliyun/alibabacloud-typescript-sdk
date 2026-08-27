// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair.
   * 
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
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
      userAccessKeyId: 'UserAccessKeyId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
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

