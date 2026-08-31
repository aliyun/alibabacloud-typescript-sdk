// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKgRelationRequestUpdateCommandPropertyList extends $dara.Model {
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

export class UpdateKgRelationRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The list of relationship record properties.
   */
  propertyList?: UpdateKgRelationRequestUpdateCommandPropertyList[];
  /**
   * @remarks
   * The relationship record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @remarks
   * The relationship type code.
   * 
   * This parameter is required.
   * 
   * @example
   * Company
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      propertyList: 'PropertyList',
      relationId: 'RelationId',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyList: { 'type': 'array', 'itemType': UpdateKgRelationRequestUpdateCommandPropertyList },
      relationId: 'string',
      relationType: 'string',
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

export class UpdateKgRelationRequest extends $dara.Model {
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
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateKgRelationRequestUpdateCommand;
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
      updateCommand: UpdateKgRelationRequestUpdateCommand,
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

