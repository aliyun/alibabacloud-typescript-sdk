// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSDemoRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the namespace.
   * > When the engine is xunfei, you must enter the AccessKey ID.
   * 
   * @example
   * 5d0f37**********ef56db601****
   */
  accessKey?: string;
  /**
   * @remarks
   * The Alibaba Cloud custom voice, which is the voice invocation ID.
   * 
   * @example
   * voice-e1be3a6
   */
  aliCustomizedVoice?: string;
  /**
   * @remarks
   * The speech service type. 
   * 
   * - When **ali** is used as the custom service, this field stores the appKey of the interactive voice response product project.
   * 
   * - When **xunfei** is used as the custom service provider, this field stores the corresponding appKey.
   * 
   * @example
   * xusi*******RnP7
   */
  appKey?: string;
  /**
   * @remarks
   * The storage engine. Valid values: **ali**, **volc**, and **xunfei**.
   * 
   * - To use traditional voices, CosyVoice, or Alibaba Cloud as the custom service, enter **ali**.
   * - To use the doubao service, enter **volc**.
   * - To use xunfei as the service provider, enter **xunfei**. This option is only available for small model scenarios.
   * - To use a self-managed service, enter **dock** and set NlsServiceType to Authorized.
   * - To use CV-v3-flash and Qwen voices, enter **bailian**.
   * 
   * @example
   * ali
   */
  engine?: string;
  /**
   * @remarks
   * The extended parameters. When Engine is set to **dock**, you must enter the configuration ID.
   * 
   * @example
   * {"thirdVoiceConfigUuid":"3cd82813ece049c4aff3ea3d***********"}
   */
  extParams?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a8eccb3c-2b26-4b6d-a54f-696b953e33a6
   */
  instanceId?: string;
  /**
   * @remarks
   * The service type.
   * Managed: the default service (public service) for the outbound robot product.
   * Authorized: the interactive voice response service purchased by public cloud customers (custom service). You can configure it in system administration > Third-party Speech Configuration.
   * 
   * > When you need to use Alibaba Cloud interactive voice response, that is, when you use Alibaba Cloud as the custom service provider, you must enter Authorized.
   * 
   * @example
   * Authorized
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * The intonation.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The sample rate.
   * 
   * @example
   * 8000
   */
  sampleRate?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 5ab2d935-306c-478a-88bf-d08e4e25c1b7
   */
  scriptId?: string;
  /**
   * @remarks
   * The AccessKey secret of the namespace.
   * 
   * > When the engine is xunfei, you must enter the AccessKey secret.
   * 
   * @example
   * OTdhNDE3Z********zQ****
   */
  secretKey?: string;
  /**
   * @remarks
   * The speech rate.
   * Valid values: integers from -500 to 500. Default value: 0.
   * 
   * A value greater than 0 increases the pitch.
   * 
   * A value less than 0 decreases the pitch.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * The text content.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  text?: string;
  /**
   * @remarks
   * The voice information, such as aixia, siyue, or xiaoyun. For the complete list of voices, refer to the voice list below.
   * 
   * > Because the Voice value for cloned voices is not fixed and is generated during voice cloning, a specific Voice value cannot be provided at this stage. You must obtain the specific Voice ID from the ListVoiceClone request on the voice cloning page.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * The volume.
   * Valid values: integers from 0 to 100. Default value: 50.
   * 
   * A value greater than 50 increases the volume.
   * 
   * A value less than 50 decreases the volume.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      aliCustomizedVoice: 'AliCustomizedVoice',
      appKey: 'AppKey',
      engine: 'Engine',
      extParams: 'ExtParams',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
      sampleRate: 'SampleRate',
      scriptId: 'ScriptId',
      secretKey: 'SecretKey',
      speechRate: 'SpeechRate',
      text: 'Text',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      aliCustomizedVoice: 'string',
      appKey: 'string',
      engine: 'string',
      extParams: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      pitchRate: 'number',
      sampleRate: 'number',
      scriptId: 'string',
      secretKey: 'string',
      speechRate: 'number',
      text: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

