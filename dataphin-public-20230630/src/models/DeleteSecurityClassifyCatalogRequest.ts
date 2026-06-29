// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityClassifyCatalogRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The full path of the original catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * /d1/d2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to return deletion details. Default value: true.
   */
  returnRemovedDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      returnRemovedDetails: 'ReturnRemovedDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      returnRemovedDetails: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityClassifyCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The delete instruction.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteSecurityClassifyCatalogRequestDeleteCommand;
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
      deleteCommand: DeleteSecurityClassifyCatalogRequestDeleteCommand,
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

