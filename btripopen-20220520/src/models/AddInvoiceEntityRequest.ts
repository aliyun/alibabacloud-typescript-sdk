// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddInvoiceEntityRequestEntities } from "./AddInvoiceEntityRequestEntities";


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

