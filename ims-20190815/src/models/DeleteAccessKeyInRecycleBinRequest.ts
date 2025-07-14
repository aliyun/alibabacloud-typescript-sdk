// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessKeyInRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the RAM user.
   * 
   * @example
   * LTAI*******************
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * > - If you use an Alibaba Cloud account to call the operation, you must specify the parameter.
   * > - If you use a RAM user to call the operation, you can leave the parameter empty. In this case, the ID of the RAM user is used by default.
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

