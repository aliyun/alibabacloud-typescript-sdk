// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInnerProductInfoResponseBodyDataPagination extends $dara.Model {
  limit?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      page: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

