// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAssetsRequest extends $dara.Model {
  assetIndustrys?: string[];
  assetName?: string;
  assetTypes?: string[];
  companyId?: number;
  marketId?: number;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      assetIndustrys: 'assetIndustrys',
      assetName: 'assetName',
      assetTypes: 'assetTypes',
      companyId: 'companyId',
      marketId: 'marketId',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIndustrys: { 'type': 'array', 'itemType': 'string' },
      assetName: 'string',
      assetTypes: { 'type': 'array', 'itemType': 'string' },
      companyId: 'number',
      marketId: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetIndustrys)) {
      $dara.Model.validateArray(this.assetIndustrys);
    }
    if(Array.isArray(this.assetTypes)) {
      $dara.Model.validateArray(this.assetTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

