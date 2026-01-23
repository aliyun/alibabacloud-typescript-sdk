// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityClassifyRequestDeleteCommand extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * /
   */
  parentPath?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      parentPath: 'ParentPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      parentPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityClassifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteSecurityClassifyRequestDeleteCommand;
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
      deleteCommand: DeleteSecurityClassifyRequestDeleteCommand,
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

