// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPbcSubscribeRequest extends $dara.Model {
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

