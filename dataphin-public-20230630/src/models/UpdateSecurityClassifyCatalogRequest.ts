// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityClassifyCatalogRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The name of the classification catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of administrator IDs. This parameter is valid only when the parent catalog is the root catalog.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The full path of the parent classification catalog. Default value: /.
   * 
   * @example
   * /d1/
   */
  parentPath?: string;
  /**
   * @remarks
   * The original full path of the catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * /d1/d2/
   */
  path?: string;
  /**
   * @remarks
   * The classification visibility scope. Valid values: PUBLIC (public) and PRIVATE (visible only to administrators). Default value: PUBLIC. This parameter is valid only when the parent catalog is the root catalog.
   * 
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateSecurityClassifyCatalogRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

