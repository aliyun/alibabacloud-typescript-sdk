// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceAccessProfileResponseBodyDataVoiceAccessProfilesProfile extends $dara.Model {
  /**
   * @remarks
   * The AccessKey for Doubao API calls.
   * 
   * @example
   * HwRnTXgwnQOlsj68URDS5_VMm4Wtapq9
   */
  accessKey?: string;
  /**
   * @remarks
   * The ApiKey for Alibaba Cloud Bailian and iFLYTEK API calls.
   * 
   * @example
   * sk-12341e259b1049e8872b47981e545f78
   */
  apiKey?: string;
  /**
   * @remarks
   * The ApiSecret for iFLYTEK API calls.
   * 
   * @example
   * c0358c6e51c1013b446fdeb21a3a1234
   */
  apiSecret?: string;
  /**
   * @remarks
   * The AppId for iFLYTEK API calls.
   * 
   * @example
   * 5b123bfb
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey for Doubao API calls.
   * 
   * @example
   * 2541370123
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is not in use.
   * 
   * @example
   * Not in use
   */
  asrAppKey?: string;
  /**
   * @remarks
   * This parameter is not in use.
   * 
   * @example
   * Not in use
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

export class ListVoiceAccessProfileResponseBodyDataVoiceAccessProfiles extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The list of voice engine capabilities.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1747620752000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The voice engine.
   * 
   * @example
   * VOLC
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Doubao
   */
  nlsEngineName?: string;
  /**
   * @remarks
   * The parameter settings.
   */
  profile?: ListVoiceAccessProfileResponseBodyDataVoiceAccessProfilesProfile;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1747620752000
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
      profile: ListVoiceAccessProfileResponseBodyDataVoiceAccessProfilesProfile,
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

export class ListVoiceAccessProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of third-party voice configurations.
   */
  voiceAccessProfiles?: ListVoiceAccessProfileResponseBodyDataVoiceAccessProfiles[];
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
      voiceAccessProfiles: { 'type': 'array', 'itemType': ListVoiceAccessProfileResponseBodyDataVoiceAccessProfiles },
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

export class ListVoiceAccessProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated results of third-party voice configurations.
   */
  data?: ListVoiceAccessProfileResponseBodyData;
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
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1788610-93C9-574C-AF2D-C053A50C3894
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVoiceAccessProfileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

