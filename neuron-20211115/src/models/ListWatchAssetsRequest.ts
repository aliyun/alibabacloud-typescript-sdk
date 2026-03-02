// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWatchAssetsRequest extends $dara.Model {
  accountId?: string;
  assetType?: string;
  companyId?: number;
  marketId?: number;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  upshelfAssetId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      assetType: 'assetType',
      companyId: 'companyId',
      marketId: 'marketId',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      upshelfAssetId: 'upshelfAssetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      assetType: 'string',
      companyId: 'number',
      marketId: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      upshelfAssetId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

