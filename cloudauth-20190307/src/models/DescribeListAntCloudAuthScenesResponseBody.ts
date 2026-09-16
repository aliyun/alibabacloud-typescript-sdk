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
   * The creation time. The value is a UNIX timestamp in milliseconds (ms), such as 1740389697000.
   * 
   * @example
   * 1740389697000
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
   * The iOS scheme for degradation.
   * 
   * @example
   * cloudauth://callback
   */
  degradeAppScheme?: string;
  /**
   * @remarks
   * The list of SubCodes that trigger degradation.
   * 
   * @example
   * 201,202
   */
  degradeSubCodes?: string;
  /**
   * @remarks
   * The degraded authentication type.
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
   * TestApp
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
   * The number of evidence face photos (1-5).
   * 
   * @example
   * 1
   */
  returnPicCount?: number;
  /**
   * @remarks
   * The evidence video duration in seconds.
   * 
   * @example
   * 1
   */
  returnVideoLength?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 100001xxxx
   */
  sceneId?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * TestScenario
   */
  sceneName?: string;
  /**
   * @remarks
   * Indicates whether the scenario is enabled. The value is 1.
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
   * The last update time of the instance. The value is a UNIX timestamp in milliseconds (ms), such as 1740541510000.
   * 
   * @example
   * 1740541510000
   */
  updateTime?: string;
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
      appId: 'AppId',
      bindMiniProgram: 'BindMiniProgram',
      createTime: 'CreateTime',
      creator: 'Creator',
      degradeAppScheme: 'DegradeAppScheme',
      degradeSubCodes: 'DegradeSubCodes',
      degradeType: 'DegradeType',
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
      useDegrade: 'UseDegrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      bindMiniProgram: 'string',
      createTime: 'string',
      creator: 'string',
      degradeAppScheme: 'string',
      degradeSubCodes: 'string',
      degradeType: 'string',
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

export class DescribeListAntCloudAuthScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC1AB3F5-22A2-589F-ABDD-B766694AA671
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scenarios.
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

