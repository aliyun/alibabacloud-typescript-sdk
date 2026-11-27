// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteAccountToResourceDirectoryRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The note. The note can be up to 1,024 characters in length.
   * 
   * @example
   * Welcome to join
   */
  note?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: InviteAccountToResourceDirectoryRequestTag[];
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * - Account: account ID.
   * - Email: logon email address.
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

