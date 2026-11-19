// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKgEntityRequestUpdateCommandPropertyList extends $dara.Model {
  /**
   * @remarks
   * The code of the property.
   * 
   * This parameter is required.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The value of the property.
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

export class UpdateKgEntityRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity record.
   * 
   * This parameter is required.
   * 
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @remarks
   * The code of the entity type.
   * 
   * This parameter is required.
   * 
   * @example
   * Company
   */
  entityType?: string;
  /**
   * @remarks
   * The property list of the entity record.
   * 
   * This parameter is required.
   */
  propertyList?: UpdateKgEntityRequestUpdateCommandPropertyList[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      propertyList: 'PropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      propertyList: { 'type': 'array', 'itemType': UpdateKgEntityRequestUpdateCommandPropertyList },
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

export class UpdateKgEntityRequest extends $dara.Model {
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
  updateCommand?: UpdateKgEntityRequestUpdateCommand;
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
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateKgEntityRequestUpdateCommand,
      workspaceId: 'string',
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

