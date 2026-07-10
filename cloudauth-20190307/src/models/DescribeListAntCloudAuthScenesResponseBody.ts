// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListAntCloudAuthScenesResponseBodyScenes extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 2a3a13b6-ee85-457e-bd15-b48115cb396e
   */
  appId?: number;
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
   * The creation time.
   * 
   * @example
   * 1260051251634779
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 189884094677xxxx
   */
  creator?: string;
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
   * The bound domain name.
   * 
   * @example
   * www.ddos.com
   */
  domain?: string;
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
   * The modifier.
   * 
   * @example
   * 189884094677xxxx
   */
  modifier?: string;
  /**
   * @remarks
   * The mini program platform. Valid values:
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
   * The number of evidence face photos (1 to 5).
   * 
   * @example
   * 1
   */
  returnPicCount?: number;
  /**
   * @remarks
   * The duration of the evidence video, in seconds.
   * 
   * @example
   * 1
   */
  returnVideoLength?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 100001xxxx
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * 测试场景
   */
  sceneName?: string;
  /**
   * @remarks
   * Indicates whether the scene is enabled. The value 1 indicates enabled.
   * 
   * @example
   * 1
   */
  status?: number;
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
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 1260051251634779
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bindMiniProgram: 'BindMiniProgram',
      createTime: 'CreateTime',
      creator: 'Creator',
      deviceRiskPlus: 'DeviceRiskPlus',
      domain: 'Domain',
      miniProgramName: 'MiniProgramName',
      modifier: 'Modifier',
      platform: 'Platform',
      returnPicCount: 'ReturnPicCount',
      returnVideoLength: 'ReturnVideoLength',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
      storeImage: 'StoreImage',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bindMiniProgram: 'string',
      createTime: 'string',
      creator: 'string',
      deviceRiskPlus: 'string',
      domain: 'string',
      miniProgramName: 'string',
      modifier: 'string',
      platform: 'string',
      returnPicCount: 'number',
      returnVideoLength: 'number',
      sceneId: 'number',
      sceneName: 'string',
      status: 'number',
      storeImage: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListAntCloudAuthScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC1AB3F5-22A2-589F-ABDD-B766694AA671
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scenes.
   */
  scenes?: DescribeListAntCloudAuthScenesResponseBodyScenes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenes: { 'type': 'array', 'itemType': DescribeListAntCloudAuthScenesResponseBodyScenes },
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

