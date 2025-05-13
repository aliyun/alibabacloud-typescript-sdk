// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemberRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The list of roles.
   * 
   * This parameter is required.
   */
  roles?: string[];
  /**
   * @remarks
   * The member IDs. Multiple member IDs are separated by commas (,). You can call [ListMembers](https://help.aliyun.com/document_detail/449135.html) to obtain the member IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

