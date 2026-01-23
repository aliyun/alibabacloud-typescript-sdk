// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityLevelRequestDeleteCommand extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  /**
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
   * This parameter is required.
   */
  deleteCommand?: DeleteSecurityLevelRequestDeleteCommand;
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

