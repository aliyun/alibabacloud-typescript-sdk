// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityLevelRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The sensitivity level of the classification level. If this parameter is not specified, the classification level is deleted based on an exact match of the classification level name.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The classification level name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The delete instruction.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteSecurityLevelRequestDeleteCommand;
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
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteSecurityLevelRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

