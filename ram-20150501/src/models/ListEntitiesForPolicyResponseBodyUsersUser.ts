// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesForPolicyResponseBodyUsersUser extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was attached to the RAM user.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * Zhang*
   */
  displayName?: string;
  /**
   * @remarks
   * The unique ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
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
      attachDate: 'AttachDate',
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      displayName: 'string',
      userId: 'string',
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

