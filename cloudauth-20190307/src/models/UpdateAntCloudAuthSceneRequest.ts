// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind a mini program. Valid values:
   * - **Y**: enabled.
   * - **N (default)**: disabled.
   * >Notice: If you enable mini program binding, make sure that you specify all parameters related to the mini program binding.
   * 
   * @example
   * Y
   */
  bindMiniProgram?: string;
  /**
   * @remarks
   * The content of the uploaded verification file.
   * 
   * @example
   * 774c4aab45981ff4a86cde9255a11xxx
   */
  checkFileBody?: string;
  /**
   * @remarks
   * The name of the uploaded verification file.
   * 
   * @example
   * test.txt
   */
  checkFileName?: string;
  /**
   * @remarks
   * The iOS app scheme for degradation.
   * 
   * @example
   * cloudauth://callback
   */
  degradeAppScheme?: string;
  /**
   * @remarks
   * The SubCode that triggers degradation.
   * 
   * @example
   * 201,202
   */
  degradeSubCodes?: string;
  /**
   * @remarks
   * Specifies whether to enable degraded authentication.
   * 
   * @example
   * ALIPAY
   */
  degradeType?: string;
  /**
   * @remarks
   * Specifies whether to enable enhanced device risk detection. Valid values:
   * - **Y**: enabled.
   * - **N**: disabled.
   * 
   * @example
   * Y
   */
  deviceRiskPlus?: string;
  /**
   * @remarks
   * The name of the mini program.
   * 
   * @example
   * TestApp
   */
  miniProgramName?: string;
  /**
   * @remarks
   * The mini program platform. Valid values:
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
   * The number of returned photos (1 to 5). This parameter takes effect after StoreImage is enabled for authentication file retention.
   * 
   * @example
   * 1
   */
  returnPicCount?: number;
  /**
   * @remarks
   * The duration of the returned video (1 to 2 seconds). This parameter takes effect after StoreImage is enabled.
   * 
   * @example
   * 2
   */
  returnVideoLength?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000013372
   */
  sceneId?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * test
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter has no effect. You do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether to deliver authentication files generated during the authentication process to your OSS bucket. Valid values:
   * - **Y**: enabled.
   * - **N (default)**: disabled.
   * 
   * @example
   * Y
   */
  storeImage?: string;
  /**
   * @remarks
   * Specifies whether to enable degraded authentication.
   * 
   * @example
   * Y
   */
  useDegrade?: string;
  static names(): { [key: string]: string } {
    return {
      bindMiniProgram: 'BindMiniProgram',
      checkFileBody: 'CheckFileBody',
      checkFileName: 'CheckFileName',
      degradeAppScheme: 'DegradeAppScheme',
      degradeSubCodes: 'DegradeSubCodes',
      degradeType: 'DegradeType',
      deviceRiskPlus: 'DeviceRiskPlus',
      miniProgramName: 'MiniProgramName',
      platform: 'Platform',
      returnPicCount: 'ReturnPicCount',
      returnVideoLength: 'ReturnVideoLength',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
      storeImage: 'StoreImage',
      useDegrade: 'UseDegrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindMiniProgram: 'string',
      checkFileBody: 'string',
      checkFileName: 'string',
      degradeAppScheme: 'string',
      degradeSubCodes: 'string',
      degradeType: 'string',
      deviceRiskPlus: 'string',
      miniProgramName: 'string',
      platform: 'string',
      returnPicCount: 'number',
      returnVideoLength: 'number',
      sceneId: 'number',
      sceneName: 'string',
      status: 'number',
      storeImage: 'string',
      useDegrade: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

