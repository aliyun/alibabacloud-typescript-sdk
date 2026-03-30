// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserId` and `UserAccessKeyId`.
   * 
   * @example
   * LTAI*******************
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserId` and `UserAccessKeyId`.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

