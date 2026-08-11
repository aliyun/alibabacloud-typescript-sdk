// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfilesProfile extends $dara.Model {
  /**
   * @remarks
   * Required when NlsEngine=VOLC.
   * 
   * @example
   * ****
   */
  accessKey?: string;
  /**
   * @remarks
   * Required when NlsEngine=IFLYTEK or NlsEngine=BAILIAN.
   * 
   * @example
   * a9872e2342952e248727798f642936c7
   */
  apiKey?: string;
  /**
   * @remarks
   * Required when NlsEngine=IFLYTEK.
   * 
   * @example
   * c0358c6e51c1013b446fdeb21a3a5d2e
   */
  apiSecret?: string;
  /**
   * @remarks
   * Required when NlsEngine=IFLYTEK or NlsEngine=TENCENT.
   * 
   * @example
   * 9479688350
   */
  appId?: string;
  /**
   * @remarks
   * Required when NlsEngine=VOLC.
   * 
   * @example
   * DW0yKRHQEe1nAd8c
   */
  appKey?: string;
  /**
   * @remarks
   * Not currently in use.
   * 
   * @example
   * Not currently in use
   */
  asrAppKey?: string;
  /**
   * @remarks
   * Required when NlsEngine=TENCENT.
   * 
   * @example
   * sci_r3b3e62udqcujnkerrorqztnpu
   */
  secretId?: string;
  /**
   * @remarks
   * Required when NlsEngine=TENCENT.
   * 
   * @example
   * y5MZfFdW6yBZgJdKonHZBA
   */
  secretKey?: string;
  /**
   * @remarks
   * Not currently in use.
   * 
   * @example
   * Not currently in use
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
   * The access profile ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The list of supported capabilities.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The voice engine vendor. Valid values:
   * - BAILIAN: Bailian.
   * - VOLC: Doubao.
   * - IFLYTEK: iFLYTEK.
   * - TENCENT: Tencent.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The display name of the voice engine vendor.
   * 
   * @example
   * Bailian
   */
  nlsEngineName?: string;
  /**
   * @remarks
   * The configuration.
   */
  profile?: ListVoiceAccessProfilesResponseBodyDataVoiceAccessProfilesProfile;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
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
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The data list.
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
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListVoiceAccessProfilesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=outb001,.
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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

