// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDataServiceAppMemberRequestRemoveCommand extends $dara.Model {
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
  memberIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      memberIds: 'MemberIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      memberIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.memberIds)) {
      $dara.Model.validateArray(this.memberIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataServiceAppMemberRequest extends $dara.Model {
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
  removeCommand?: RemoveDataServiceAppMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveDataServiceAppMemberRequestRemoveCommand,
    };
  }

  validate() {
    if(this.removeCommand && typeof (this.removeCommand as any).validate === 'function') {
      (this.removeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

