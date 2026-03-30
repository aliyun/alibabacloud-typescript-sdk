// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceAccessProfileResponseBodyDataVoiceAccessProfilesProfile extends $dara.Model {
  /**
   * @example
   * HwRnTXgwnQOlsj68URDS5_VMm4Wtapq9
   */
  accessKey?: string;
  /**
   * @example
   * sk-12341e259b1049e8872b47981e545f78
   */
  apiKey?: string;
  /**
   * @example
   * c0358c6e51c1013b446fdeb21a3a1234
   */
  apiSecret?: string;
  /**
   * @example
   * 5b123bfb
   */
  appId?: string;
  /**
   * @example
   * 2541370123
   */
  appKey?: string;
  asrAppKey?: string;
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
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  capabilities?: string[];
  /**
   * @example
   * 1747620752000
   */
  createdTime?: number;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * VOLC
   */
  nlsEngine?: string;
  nlsEngineName?: string;
  profile?: ListVoiceAccessProfileResponseBodyDataVoiceAccessProfilesProfile;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: ListVoiceAccessProfileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
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

