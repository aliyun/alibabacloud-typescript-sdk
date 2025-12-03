// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceMembersResponseBodyResourceMembers extends $dara.Model {
  /**
   * @example
   * 22212212
   */
  accountId?: string;
  /**
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleName: 'roleName',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleName: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceMembersResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  resourceMembers?: ListResourceMembersResponseBodyResourceMembers[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      resourceMembers: 'resourceMembers',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      resourceMembers: { 'type': 'array', 'itemType': ListResourceMembersResponseBodyResourceMembers },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resourceMembers)) {
      $dara.Model.validateArray(this.resourceMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

