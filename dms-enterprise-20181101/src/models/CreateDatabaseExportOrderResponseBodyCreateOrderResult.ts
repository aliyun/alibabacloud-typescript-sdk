// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseExportOrderResponseBodyCreateOrderResult extends $dara.Model {
  createOrderResult?: number[];
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.createOrderResult)) {
      $dara.Model.validateArray(this.createOrderResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

