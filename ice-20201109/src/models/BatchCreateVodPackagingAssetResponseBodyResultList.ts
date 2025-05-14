// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingAsset } from "./VodPackagingAsset";


export class BatchCreateVodPackagingAssetResponseBodyResultList extends $dara.Model {
  /**
   * @remarks
   * The information about the ingested asset.
   */
  asset?: VodPackagingAsset;
  /**
   * @remarks
   * The error code for failed ingestion.
   * 
   * @example
   * InvalidParameter.PackagingAssetAlreadyExists
   */
  code?: string;
  /**
   * @remarks
   * The error message for failed ingestion.
   * 
   * @example
   * The specified packagingAsset "inputMovie" already exists
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: VodPackagingAsset,
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    if(this.asset && typeof (this.asset as any).validate === 'function') {
      (this.asset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

