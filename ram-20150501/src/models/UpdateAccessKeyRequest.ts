// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values: `Active` and `Inactive`.
   * 
   * @example
   * Inactive
   */
  status?: string;
  /**
   * @remarks
   * The AccessKey ID in the AccessKey pair whose status you want to change.``
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userAccessKeyId: 'UserAccessKeyId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

