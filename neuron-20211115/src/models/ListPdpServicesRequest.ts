// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpServicesRequest extends $dara.Model {
  alias?: string;
  enterpriseId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  pbcId?: number;
  pdpServiceIds?: number[];
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      enterpriseId: 'enterpriseId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      pdpServiceIds: 'pdpServiceIds',
      productId: 'productId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      enterpriseId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'number',
      pdpServiceIds: { 'type': 'array', 'itemType': 'number' },
      productId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pdpServiceIds)) {
      $dara.Model.validateArray(this.pdpServiceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

