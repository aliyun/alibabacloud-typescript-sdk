// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataServiceAppMemberRequestUpdateCommandMemberList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-12-12
   */
  effectiveEnd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveEnd: 'EffectiveEnd',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEnd: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceAppMemberRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200000000
   */
  appId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  memberList?: UpdateDataServiceAppMemberRequestUpdateCommandMemberList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      memberList: { 'type': 'array', 'itemType': UpdateDataServiceAppMemberRequestUpdateCommandMemberList },
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

export class UpdateDataServiceAppMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateDataServiceAppMemberRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataServiceAppMemberRequestUpdateCommand,
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

