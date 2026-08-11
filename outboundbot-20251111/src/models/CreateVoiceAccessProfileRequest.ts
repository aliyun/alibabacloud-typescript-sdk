// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVoiceAccessProfileRequestProfile extends $dara.Model {
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

export class CreateVoiceAccessProfileRequest extends $dara.Model {
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
   * The voice service provider.
   * BAILIAN: Bailian.
   * VOLC: Doubao.
   * IFLYTEK: iFLYTEK.
   * TENCENT: Tencent.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The provider configuration information.
   */
  profile?: CreateVoiceAccessProfileRequestProfile;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nlsEngine: 'NlsEngine',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nlsEngine: 'string',
      profile: CreateVoiceAccessProfileRequestProfile,
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

