// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyInfoInRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the Resource Access Management (RAM) user.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI*******************
   */
  userAccessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

