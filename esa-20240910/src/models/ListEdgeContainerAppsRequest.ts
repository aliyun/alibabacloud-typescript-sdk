// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppsRequest extends $dara.Model {
  orderKey?: string;
  orderType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      searchType: 'SearchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderKey: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      searchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

