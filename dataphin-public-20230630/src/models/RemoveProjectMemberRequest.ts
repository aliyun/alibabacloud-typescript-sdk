// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectMemberRequestRemoveCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  id?: number;
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
  removeCommand?: RemoveProjectMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      removeCommand: RemoveProjectMemberRequestRemoveCommand,
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

