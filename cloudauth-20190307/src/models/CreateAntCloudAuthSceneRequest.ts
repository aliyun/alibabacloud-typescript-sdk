// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable mini program binding. Valid values:
   * - **Y**: Enabled.
   * - **N (default)**: Disabled.
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
   * The iOS app scheme for degradation redirect.
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
   * The degradation verification type.
   * 
   * @example
   * ALIPAY
   */
  degradeType?: string;
  /**
   * @remarks
   * Specifies whether to enable enhanced device risk detection. Valid values:
   * - **Y**: Enabled.
   * - **N**: Disabled.
   * 
   * @example
   * N
   */
  deviceRiskPlus?: string;
  /**
   * @remarks
   * The mini program name.
   * 
   * @example
   * TestApp
   */
  miniProgramName?: string;
  /**
   * @remarks
   * The mini program platform to bind. Valid values:
   * - **WECHAT**: WeChat.
   * - **ALIPAY**: Alipay.
   * - **TIKTOK**: TikTok.
   * 
   * @example
   * WECHAT
   */
  platform?: string;
  /**
   * @remarks
   * The number of face photos for evidence storage (1-5).
   * 
   * @example
   * 1
   */
  returnPicCount?: number;
  /**
   * @remarks
   * The duration of the evidence storage video, in seconds.
   * 
   * @example
   * 1
   */
  returnVideoLength?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * This parameter is required.
   * 
   * @example
   * TestScenario
   */
  sceneName?: string;
  /**
   * @remarks
   * Specifies whether to deliver files generated during verification to the customer\\"s OSS. Valid values:
   * - **Y**: Yes.
   * - **N**: No.
   * 
   * @example
   * Y
   */
  storeImage?: string;
  /**
   * @remarks
   * Specifies whether to enable degradation.
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
      sceneName: 'SceneName',
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
      sceneName: 'string',
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

