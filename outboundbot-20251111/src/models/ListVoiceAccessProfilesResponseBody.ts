// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfilesProfile extends $dara.Model {
  /**
   * @remarks
   * 访问密钥
   * 
   * @example
   * ****
   */
  accessKey?: string;
  /**
   * @remarks
   * 百炼同时使用
   * 
   * @example
   * a9872e2342952e248727798f642936c7
   */
  apiKey?: string;
  /**
   * @remarks
   * API密钥
   * 
   * @example
   * c0358c6e51c1013b446fdeb21a3a5d2e
   */
  apiSecret?: string;
  /**
   * @remarks
   * 科大讯飞使用
   * 
   * @example
   * 9479688350
   */
  appId?: string;
  /**
   * @remarks
   * 豆包使用
   * 
   * @example
   * DW0yKRHQEe1nAd8c
   */
  appKey?: string;
  /**
   * @remarks
   * 货拉拉使用
   * 
   * @example
   * 暂无使用
   */
  asrAppKey?: string;
  /**
   * @remarks
   * 腾讯云使用，appId 已存在
   * 
   * @example
   * sci_r3b3e62udqcujnkerrorqztnpu
   */
  secretId?: string;
  /**
   * @remarks
   * 密钥
   * 
   * @example
   * y5MZfFdW6yBZgJdKonHZBA
   */
  secretKey?: string;
  /**
   * @remarks
   * TTS服务API Key
   * 
   * @example
   * 暂无使用
   */
  ttsApiKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      apiKey: 'ApiKey',
      apiSecret: 'ApiSecret',
      appId: 'AppId',
      appKey: 'AppKey',
      asrAppKey: 'AsrAppKey',
      secretId: 'SecretId',
      secretKey: 'SecretKey',
      ttsApiKey: 'TtsApiKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      apiKey: 'string',
      apiSecret: 'string',
      appId: 'string',
      appKey: 'string',
      asrAppKey: 'string',
      secretId: 'string',
      secretKey: 'string',
      ttsApiKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * 接入配置ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  accessProfileId?: string;
  /**
   * @remarks
   * 能力列表
   */
  capabilities?: string[];
  /**
   * @remarks
   * 创建时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 目前支持IFLYTEK、VOLC
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * 引擎显示名称(例如：豆包、货拉拉)
   * 
   * @example
   * 百炼
   */
  nlsEngineName?: string;
  /**
   * @remarks
   * 配置
   */
  profile?: ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfilesProfile;
  /**
   * @remarks
   * 更新时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      capabilities: 'Capabilities',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      nlsEngine: 'NlsEngine',
      nlsEngineName: 'NlsEngineName',
      profile: 'Profile',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      capabilities: { 'type': 'array', 'itemType': 'string' },
      createdTime: 'number',
      instanceId: 'string',
      nlsEngine: 'string',
      nlsEngineName: 'string',
      profile: ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfilesProfile,
      updatedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAccessProfilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 页码，从1开始
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的记录总数
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * 数据列表
   */
  voiceAccessProfiles?: ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfiles[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voiceAccessProfiles: 'VoiceAccessProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voiceAccessProfiles: { 'type': 'array', 'itemType': ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfiles },
    };
  }

  validate() {
    if(Array.isArray(this.voiceAccessProfiles)) {
      $dara.Model.validateArray(this.voiceAccessProfiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceAccessProfilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回码
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据
   */
  data?: ListVoiceAccessProfilesResponseBodyData;
  /**
   * @remarks
   * HTTP状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * Instance does not exist. Instance=outb001,.
   */
  message?: string;
  /**
   * @remarks
   * 错误信息中的变量值列表
   */
  params?: string[];
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * 是否调用成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVoiceAccessProfilesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

