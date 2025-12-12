// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteAccountToResourceDirectoryRequestTag extends $dara.Model {
  /**
   * @remarks
   * A tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The comment on the invitation.
   * 
   * The comment can be up to 1,024 characters in length.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The tag key and value.
   */
  tag?: InviteAccountToResourceDirectoryRequestTag[];
  /**
   * @remarks
   * The ID or logon email address of the account that you want to invite.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      tag: 'Tag',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      tag: { 'type': 'array', 'itemType': InviteAccountToResourceDirectoryRequestTag },
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

