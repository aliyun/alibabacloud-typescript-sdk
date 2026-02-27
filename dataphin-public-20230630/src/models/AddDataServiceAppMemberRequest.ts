// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDataServiceAppMemberRequestAddCommandMemberList extends $dara.Model {
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

export class AddDataServiceAppMemberRequestAddCommand extends $dara.Model {
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
  memberList?: AddDataServiceAppMemberRequestAddCommandMemberList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      memberList: { 'type': 'array', 'itemType': AddDataServiceAppMemberRequestAddCommandMemberList },
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

export class AddDataServiceAppMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommand?: AddDataServiceAppMemberRequestAddCommand;
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
      addCommand: AddDataServiceAppMemberRequestAddCommand,
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

