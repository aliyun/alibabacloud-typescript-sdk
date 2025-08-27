// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInvoiceEntityRequestEntities extends $dara.Model {
  /**
   * @example
   * 12345
   */
  entityId?: string;
  /**
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
   * @example
   * false
   */
  delAll?: boolean;
  entities?: DeleteInvoiceEntityRequestEntities[];
  /**
   * @remarks
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

