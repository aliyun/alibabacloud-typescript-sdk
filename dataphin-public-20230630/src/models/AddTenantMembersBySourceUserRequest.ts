// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTenantMembersBySourceUserRequestAddCommandSourceUserList extends $dara.Model {
  /**
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  displayName?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
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
  addCommand?: AddTenantMembersBySourceUserRequestAddCommand;
  /**
   * @remarks
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

