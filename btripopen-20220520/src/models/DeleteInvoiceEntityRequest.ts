// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInvoiceEntityRequestEntities extends $dara.Model {
  /**
   * @remarks
   * The entity ID, which can be a personnel ID, department ID, role ID, or third-party department ID.
   * 
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * - 1: employee
   * - 2: department
   * - 3: role
   * - 4: third-party department
   * 
   * @example
   * 1
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInvoiceEntityRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all applicable personnel. If del_all is set to true, all entities under the invoice header are deleted, and the entity list parameter is not validated.
   * 
   * @example
   * false
   */
  delAll?: boolean;
  /**
   * @remarks
   * The entity list. This parameter is required when del_all is set to false or null.
   */
  entities?: DeleteInvoiceEntityRequestEntities[];
  /**
   * @remarks
   * The third-party invoice ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      delAll: 'del_all',
      entities: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
      entities: { 'type': 'array', 'itemType': DeleteInvoiceEntityRequestEntities },
      thirdPartId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

