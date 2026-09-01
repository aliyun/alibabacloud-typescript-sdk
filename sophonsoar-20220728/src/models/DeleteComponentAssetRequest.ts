// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The asset ID of the component.
   * 
   * > Call the [DescribeComponentAssets](~~DescribeComponentAssets~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 12x
   */
  assetId?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

