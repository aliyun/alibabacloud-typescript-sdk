// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudauthstSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Product code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMART_COMPARE
   */
  productCode?: string;
  /**
   * @remarks
   * Scene name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试场景
   */
  sceneName?: string;
  /**
   * @remarks
   * Whether to deliver the files generated from the authentication to the customer\\"s OSS:
   * - **Y**: Enable
   * - **N**: Disable
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

