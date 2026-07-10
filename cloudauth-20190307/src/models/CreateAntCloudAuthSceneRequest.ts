// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntCloudAuthSceneRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable mini program binding. Valid values:
   * - **Y**: enabled
   * - **N (default)**: disabled.
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
   * 测试.txt
   */
  checkFileName?: string;
  /**
   * @remarks
   * Specifies whether to enable enhanced device risk detection. Valid values:
   * - **Y**: enabled
   * - **N**: disabled.
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
   * 测试APP
   */
  miniProgramName?: string;
  /**
   * @remarks
   * The mini program platform to bind. Valid values:
   * - **WECHAT**: WeChat
   * - **ALIPAY**: Alipay
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
   * 测试场景
   */
  sceneName?: string;
  /**
   * @remarks
   * Specifies whether to deliver the files generated during authentication to the customer\\"s OSS. Valid values:
   * - **Y**: Yes.
   * - **N**: No.
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
      sceneName: 'SceneName',
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

