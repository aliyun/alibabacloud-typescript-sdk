// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityClassifyCatalogRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  ownerList?: string[];
  /**
   * @example
   * /d1/
   */
  parentPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /d1/d2/
   */
  path?: string;
  /**
   * @example
   * PUBLIC
   */
  visibleType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerList: 'OwnerList',
      parentPath: 'ParentPath',
      path: 'Path',
      visibleType: 'VisibleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      parentPath: 'string',
      path: 'string',
      visibleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityClassifyCatalogRequest extends $dara.Model {
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
  updateCommand?: UpdateSecurityClassifyCatalogRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateSecurityClassifyCatalogRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

