// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the asset. The value is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "name": "test asset",
   *     "componentName": "SLS",
   *     "params": [
   *         {
   *             "name": "end_point",
   *             "value": "xxx"
   *         },
   *         {
   *             "name": "sub_id",
   *             "value": "xxxx"
   *         },
   *         {
   *             "name": "access_key",
   *             "value": "xxxx"
   *         }
   *     ]
   * }
   */
  assetConfig?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetConfig: 'AssetConfig',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetConfig: 'string',
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

