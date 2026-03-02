// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpServicesShrinkRequest extends $dara.Model {
  alias?: string;
  enterpriseId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  pbcId?: number;
  pdpServiceIdsShrink?: string;
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
      pdpServiceIdsShrink: 'pdpServiceIds',
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
      pdpServiceIdsShrink: 'string',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

