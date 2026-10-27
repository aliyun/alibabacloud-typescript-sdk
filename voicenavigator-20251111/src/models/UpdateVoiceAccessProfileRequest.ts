// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVoiceAccessProfileRequestProfile extends $dara.Model {
  /**
   * @remarks
   * This parameter is required when `NlsEngine` is set to `VOLC`.
   * 
   * @example
   * HwRnTXgwnQOlsj68URDS5_VMm4Wtapq9
   */
  accessKey?: string;
  /**
   * @remarks
   * This parameter is required when `NlsEngine` is set to `BAILIAN` or `IFLYTEK`.
   * 
   * @example
   * sk-12341e259b1049e8872b47981e545f78
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required when `NlsEngine` is set to `IFLYTEK`.
   * 
   * @example
   * c0358c6e51c1013b446fdeb21a3a1234
   */
  apiSecret?: string;
  /**
   * @remarks
   * This parameter is required when `NlsEngine` is set to `IFLYTEK`.
   * 
   * @example
   * 5b123bfb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required when `NlsEngine` is set to `VOLC`.
   * 
   * @example
   * 2541370123
   */
  appKey?: string;
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * 暂无使用
   */
  asrAppKey?: string;
  /**
   * @remarks
   * Reserved for future use.
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

export class UpdateVoiceAccessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The access profile ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
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
   * The parameter configuration for the selected voice engine.
   */
  profile?: UpdateVoiceAccessProfileRequestProfile;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      instanceId: 'InstanceId',
      nlsEngine: 'NlsEngine',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      instanceId: 'string',
      nlsEngine: 'string',
      profile: UpdateVoiceAccessProfileRequestProfile,
    };
  }

  validate() {
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

