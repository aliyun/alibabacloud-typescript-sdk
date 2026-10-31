// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityClassifyCatalogRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The name of the classification folder.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of administrator IDs. This parameter is valid only when the parent folder is the root folder.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The full path of the parent classification folder. Default value: /.
   * 
   * @example
   * /d1/
   */
  parentPath?: string;
  /**
   * @remarks
   * The visibility scope of the classification. This parameter is valid only when the parent folder is the root folder. Valid values:
   * - PUBLIC: Public.
   * - PRIVATE: Visible only to administrators.
   * Default value: PUBLIC.
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
      visibleType: 'VisibleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      parentPath: 'string',
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

export class CreateSecurityClassifyCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The creation command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateSecurityClassifyCatalogRequestCreateCommand;
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateSecurityClassifyCatalogRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

