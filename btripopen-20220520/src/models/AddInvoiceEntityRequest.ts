// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInvoiceEntityRequestEntities extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityName: 'entity_name',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityName: 'string',
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

export class AddInvoiceEntityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entities?: AddInvoiceEntityRequestEntities[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4854821
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      entities: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': AddInvoiceEntityRequestEntities },
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

