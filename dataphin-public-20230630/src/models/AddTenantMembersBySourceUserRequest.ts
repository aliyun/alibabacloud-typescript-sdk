// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTenantMembersBySourceUserRequestAddCommandSourceUserList extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @remarks
   * The DingTalk number.
   * 
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * xx测试
   */
  displayName?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The original ID of the user.
   * 
   * @example
   * 2323131
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      mail: 'string',
      mobilePhone: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserRequestAddCommand extends $dara.Model {
  /**
   * @remarks
   * The list of source users.
   */
  sourceUserList?: AddTenantMembersBySourceUserRequestAddCommandSourceUserList[];
  static names(): { [key: string]: string } {
    return {
      sourceUserList: 'SourceUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUserList: { 'type': 'array', 'itemType': AddTenantMembersBySourceUserRequestAddCommandSourceUserList },
    };
  }

  validate() {
    if(Array.isArray(this.sourceUserList)) {
      $dara.Model.validateArray(this.sourceUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserRequest extends $dara.Model {
  /**
   * @remarks
   * The add request.
   */
  addCommand?: AddTenantMembersBySourceUserRequestAddCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddTenantMembersBySourceUserRequestAddCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.addCommand && typeof (this.addCommand as any).validate === 'function') {
      (this.addCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

