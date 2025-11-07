// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable binding to a mini program:
   * - **Y**: Enable
   * - **N (default)**: Do not enable
   * >Notice: If enabling the binding of a mini program, please ensure all parameters for the mini program are passed.
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
   * Binding mini program platform:
   * - **WECHAT**: WeChat
   * - **ALIPAY**: Alipay
   * - **TIKTOK**: TikTok
   * 
   * @example
   * IOS
   */
  platform?: string;
  /**
   * @remarks
   * Scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000013372
   */
  sceneId?: number;
  /**
   * @remarks
   * Scenario name.
   * 
   * @example
   * test
   */
  sceneName?: string;
  /**
   * @remarks
   * Currently meaningless, can be omitted.
   * 
   * @example
   * -
   */
  status?: number;
  /**
   * @remarks
   * Whether to enable delivering the authentication files generated during the authentication process to the user\\"s OSS:
   * - **Y**: Enable
   * - **N (default)**: Disable
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
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
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
      sceneId: 'number',
      sceneName: 'string',
      status: 'number',
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

