// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKgEntityRequestCreateCommandPropertyList extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * This parameter is required.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The property value.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKgEntityRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The entity type code.
   * 
   * This parameter is required.
   * 
   * @example
   * Company
   */
  entityType?: string;
  /**
   * @remarks
   * The entity record property list.
   * 
   * This parameter is required.
   */
  propertyList?: CreateKgEntityRequestCreateCommandPropertyList[];
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      propertyList: 'PropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      propertyList: { 'type': 'array', 'itemType': CreateKgEntityRequestCreateCommandPropertyList },
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKgEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateKgEntityRequestCreateCommand;
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
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateKgEntityRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
      workspaceId: 'string',
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

