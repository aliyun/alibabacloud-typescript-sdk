// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderListQueryResponseBodyModuleInvoice extends $dara.Model {
  /**
   * @example
   * 11324
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

