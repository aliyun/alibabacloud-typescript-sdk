// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityClassifyRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The categorization ID. If this parameter is not specified, the categorization is matched and deleted based on the categorization name and parent path.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The categorization name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The categorization path. Default value: /.
   * 
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
   * The delete instruction.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteSecurityClassifyRequestDeleteCommand;
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

