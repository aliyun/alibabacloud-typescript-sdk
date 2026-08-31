// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateKgRelationRequestCreateCommandRelationListPropertyList extends $dara.Model {
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

export class BatchCreateKgRelationRequestCreateCommandRelationList extends $dara.Model {
  /**
   * @remarks
   * The list of relationship record properties.
   */
  propertyList?: BatchCreateKgRelationRequestCreateCommandRelationListPropertyList[];
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
  /**
   * @remarks
   * The ID of the source entity record.
   * 
   * This parameter is required.
   * 
   * @example
   * e1d4559a4db044158305e2d89bccf81f
   */
  sourceEntityId?: string;
  /**
   * @remarks
   * The ID of the target entity record.
   * 
   * This parameter is required.
   * 
   * @example
   * e1d4559a4db044158305e2d89bccf82f
   */
  targetEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyList: 'PropertyList',
      relationType: 'RelationType',
      sourceEntityId: 'SourceEntityId',
      targetEntityId: 'TargetEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyList: { 'type': 'array', 'itemType': BatchCreateKgRelationRequestCreateCommandRelationListPropertyList },
      relationType: 'string',
      sourceEntityId: 'string',
      targetEntityId: 'string',
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

export class BatchCreateKgRelationRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The list of relationships.
   * 
   * This parameter is required.
   */
  relationList?: BatchCreateKgRelationRequestCreateCommandRelationList[];
  static names(): { [key: string]: string } {
    return {
      relationList: 'RelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationList: { 'type': 'array', 'itemType': BatchCreateKgRelationRequestCreateCommandRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: BatchCreateKgRelationRequestCreateCommand;
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
      createCommand: BatchCreateKgRelationRequestCreateCommand,
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

