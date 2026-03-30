// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVoiceAccessProfileRequestProfile extends $dara.Model {
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

export class UpdateVoiceAccessProfileRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
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

