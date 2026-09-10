// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVoiceAccessProfileRequestProfile extends $dara.Model {
  /**
   * @remarks
   * Required when using Doubao.
   * 
   * @example
   * HwRnTXgwnQOlsj68URDS5_VMm4Wtapq9
   */
  accessKey?: string;
  /**
   * @remarks
   * Required when using Bailian or iFLYTEK.
   * 
   * @example
   * sk-12341e259b1049e8872b47981e545f78
   */
  apiKey?: string;
  /**
   * @remarks
   * Required when using iFLYTEK.
   * 
   * @example
   * c0358c6e51c1013b446fdeb21a3a1234
   */
  apiSecret?: string;
  /**
   * @remarks
   * Required when using iFLYTEK.
   * 
   * @example
   * 5b123bfb
   */
  appId?: string;
  /**
   * @remarks
   * Required when using Doubao.
   * 
   * @example
   * 2541370123
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
   * The configuration ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The Bailian business workspace ID.
   * 
   * @example
   * llm-xdne77rxe14ziszr
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The speech engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The parameter settings.
   */
  profile?: UpdateVoiceAccessProfileRequestProfile;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      businessUnitId: 'BusinessUnitId',
      nlsEngine: 'NlsEngine',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      businessUnitId: 'string',
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

