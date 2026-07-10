// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudauthstSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMART_COMPARE
   */
  productCode?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试场景
   */
  sceneName?: string;
  /**
   * @remarks
   * Specifies whether to deliver files generated during authentication to the customer\\"s OSS. Valid values:
   * - **Y**: Enabled.
   * - **N**: Disabled.
   * 
   * @example
   * Y
   */
  storeImage?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      sceneName: 'SceneName',
      storeImage: 'StoreImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      sceneName: 'string',
      storeImage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

