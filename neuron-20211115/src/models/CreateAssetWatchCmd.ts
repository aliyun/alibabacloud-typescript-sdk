// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetWatchCmd extends $dara.Model {
  assetId?: number;
  assetType?: string;
  companyId?: number;
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      assetType: 'assetType',
      companyId: 'companyId',
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'number',
      assetType: 'string',
      companyId: 'number',
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

