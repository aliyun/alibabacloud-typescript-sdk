// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAssetsShrinkRequest extends $dara.Model {
  assetIndustrysShrink?: string;
  assetName?: string;
  assetTypesShrink?: string;
  companyId?: number;
  marketId?: number;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      assetIndustrysShrink: 'assetIndustrys',
      assetName: 'assetName',
      assetTypesShrink: 'assetTypes',
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
      assetIndustrysShrink: 'string',
      assetName: 'string',
      assetTypesShrink: 'string',
      companyId: 'number',
      marketId: 'number',
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

