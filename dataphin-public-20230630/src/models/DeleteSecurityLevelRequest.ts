// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityLevelRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The sensitivity level of the data classification. If this parameter is not specified, the system deletes the data classification level by exact match on the name.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The name of the data classification level.
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
   * The delete command.
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
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteSecurityLevelRequestDeleteCommand,
      opTenantId: 'number',
      opUserId: 'string',
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

