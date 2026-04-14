// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Update Ant Blockchain Transaction Scenario
   * 
   * @example
   * Y
   */
  bindMiniProgram?: string;
  /**
   * @remarks
   * Whether to enable binding with a mini program:
   * - **Y**: Enable
   * - **N (default)**: Disable
   * >Notice: If you enable binding with a mini program, please ensure that all parameters for the mini program are passed.
   * 
   * @example
   * 774c4aab45981ff4a86cde9255a11xxx
   */
  checkFileBody?: string;
  /**
   * @remarks
   * Scenario name.
   * 
   * @example
   * Whether to enable storing the authentication files generated during the authentication process to the user\\"s OSS:
   * - **Y**: Enable
   * - **N (default)**: Disable
   */
  checkFileName?: string;
  /**
   * @remarks
   * Name of the uploaded verification file.
   * 
   * @example
   * Y
   */
  deviceRiskPlus?: string;
  /**
   * @remarks
   * System-defined parameter. Value: **UpdateAntCloudAuthScene**.
   * 
   * @example
   * Scenario ID.
   */
  miniProgramName?: string;
  /**
   * @remarks
   * Currently meaningless, can be omitted.
   * 
   * @example
   * IOS
   */
  platform?: string;
  /**
   * @remarks
   * Mini program name.
   * 
   * @example
   * 1
   */
  returnPicCount?: number;
  /**
   * @remarks
   * Platform for binding the mini program:
   * - **WECHAT**: WeChat
   * - **ALIPAY**: Alipay
   * - **TIKTOK**: TikTok
   * 
   * @example
   * 2
   */
  returnVideoLength?: number;
  /**
   * @remarks
   * Update Financial-Level Authentication Scenario
   * 
   * This parameter is required.
   * 
   * @example
   * 1000013372
   */
  sceneId?: number;
  /**
   * @remarks
   * Update the information of a financial-level authentication scenario based on the scenario ID.
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST.
   * 
   * @example
   * test
   */
  sceneName?: string;
  /**
   * @remarks
   * Update Ant Blockchain Transaction Scenario
   * 
   * @example
   * -
   */
  status?: number;
  /**
   * @remarks
   * Update the information of a financial-level authentication scenario based on the scenario ID.
   * - Service address: cloudauth.aliyuncs.com.
   * - Request method: HTTPS POST.
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
      deviceRiskPlus: 'DeviceRiskPlus',
      miniProgramName: 'MiniProgramName',
      platform: 'Platform',
      returnPicCount: 'ReturnPicCount',
      returnVideoLength: 'ReturnVideoLength',
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
      deviceRiskPlus: 'string',
      miniProgramName: 'string',
      platform: 'string',
      returnPicCount: 'number',
      returnVideoLength: 'number',
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

