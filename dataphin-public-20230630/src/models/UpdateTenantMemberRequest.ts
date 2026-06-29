// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantMemberRequestUpdateCommandMemberList extends $dara.Model {
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
   * The list of roles.
   */
  roleList?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 2331
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingNumber: 'DingNumber',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      roleList: 'RoleList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNumber: 'string',
      mail: 'string',
      mobilePhone: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The list of members.
   * 
   * This parameter is required.
   */
  memberList?: UpdateTenantMemberRequestUpdateCommandMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': UpdateTenantMemberRequestUpdateCommandMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberRequest extends $dara.Model {
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
  /**
   * @remarks
   * The request object.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateTenantMemberRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateTenantMemberRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

