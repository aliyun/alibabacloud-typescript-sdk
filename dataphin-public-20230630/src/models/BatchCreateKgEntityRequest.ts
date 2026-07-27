// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateKgEntityRequestCreateCommandEntityListPropertyList extends $dara.Model {
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

export class BatchCreateKgEntityRequestCreateCommandEntityList extends $dara.Model {
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
   * The list of entity record properties.
   * 
   * This parameter is required.
   */
  propertyList?: BatchCreateKgEntityRequestCreateCommandEntityListPropertyList[];
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      propertyList: 'PropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      propertyList: { 'type': 'array', 'itemType': BatchCreateKgEntityRequestCreateCommandEntityListPropertyList },
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

export class BatchCreateKgEntityRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The list of entity records.
   * 
   * This parameter is required.
   */
  entityList?: BatchCreateKgEntityRequestCreateCommandEntityList[];
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': BatchCreateKgEntityRequestCreateCommandEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.entityList)) {
      $dara.Model.validateArray(this.entityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateKgEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The create instruction.
   * 
   * This parameter is required.
   */
  createCommand?: BatchCreateKgEntityRequestCreateCommand;
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: BatchCreateKgEntityRequestCreateCommand,
      opTenantId: 'number',
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

