// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The ID of the user to assign.
   * 
   * @example
   * test
   */
  authorizeUserId?: string;
  /**
   * @remarks
   * The ID of the user to unassign.
   * 
   * @example
   * test
   */
  unAuthorizeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      authorizeUserId: 'AuthorizeUserId',
      unAuthorizeUserId: 'UnAuthorizeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      authorizeUserId: 'string',
      unAuthorizeUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

