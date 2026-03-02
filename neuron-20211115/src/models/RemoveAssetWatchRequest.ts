// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAssetWatchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assetType?: string;
  companyId?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'assetType',
      companyId: 'companyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      companyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

