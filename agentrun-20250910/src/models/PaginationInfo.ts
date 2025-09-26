// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaginationInfo extends $dara.Model {
  limit?: number;
  page?: number;
  total?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      page: 'page',
      total: 'total',
      totalPages: 'totalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      page: 'number',
      total: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

