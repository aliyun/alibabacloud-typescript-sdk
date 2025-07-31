// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRowPermissionRequestDeleteRowPermissionCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300001234
   */
  rowPermissionId?: number;
  static names(): { [key: string]: string } {
    return {
      rowPermissionId: 'RowPermissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowPermissionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRowPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteRowPermissionCommand?: DeleteRowPermissionRequestDeleteRowPermissionCommand;
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
      deleteRowPermissionCommand: 'DeleteRowPermissionCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRowPermissionCommand: DeleteRowPermissionRequestDeleteRowPermissionCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteRowPermissionCommand && typeof (this.deleteRowPermissionCommand as any).validate === 'function') {
      (this.deleteRowPermissionCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

