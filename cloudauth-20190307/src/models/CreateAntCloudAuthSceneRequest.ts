// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable binding of the mini program:
   * - **Y**: Enable
   * - **N (default)**: Not enabled
   * 
   * @example
   * Y
   */
  bindMiniProgram?: string;
  /**
   * @remarks
   * Content of the uploaded verification file.
   * 
   * @example
   * 774c4aab45981ff4a86cde9255a11xxx
   */
  checkFileBody?: string;
  /**
   * @remarks
   * Name of the uploaded verification file.
   * 
   * @example
   * 测试.txt
   */
  checkFileName?: string;
  /**
   * @remarks
   * Mini program name.
   * 
   * @example
   * 测试APP
   */
  miniProgramName?: string;
  /**
   * @remarks
   * Binding platform for the mini program:
   * - **WECHAT**: WeChat
   * - **ALIPAY**: Alipay
   * - **TIKTOK**: TikTok
   * 
   * @example
   * WECHAT
   */
  platform?: string;
  returnPicCount?: number;
  returnVideoLength?: number;
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
   * - **Y**: Yes
   * - **N**: No
   * 
   * @example
   * Y
   */
  storeImage?: string;
  static names(): { [key: string]: string } {
    return {
      bindMiniProgram: 'BindMiniProgram',
      checkFileBody: 'CheckFileBody',
      checkFileName: 'CheckFileName',
      miniProgramName: 'MiniProgramName',
      platform: 'Platform',
      returnPicCount: 'ReturnPicCount',
      returnVideoLength: 'ReturnVideoLength',
      sceneName: 'SceneName',
      storeImage: 'StoreImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindMiniProgram: 'string',
      checkFileBody: 'string',
      checkFileName: 'string',
      miniProgramName: 'string',
      platform: 'string',
      returnPicCount: 'number',
      returnVideoLength: 'number',
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

