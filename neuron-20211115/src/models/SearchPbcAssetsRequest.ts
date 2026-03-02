// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPbcAssetsRequest extends $dara.Model {
  industry?: string;
  keyword?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      keyword: 'keyword',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      keyword: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

