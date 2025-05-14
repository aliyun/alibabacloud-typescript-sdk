// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodPackagingAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the VOD packaging asset.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

