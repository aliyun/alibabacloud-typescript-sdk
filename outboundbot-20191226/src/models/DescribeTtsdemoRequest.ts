// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSDemoRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey (AK) for this namespace.
   * > When the engine is set to xunfei, you must enter the AK.
   * 
   * @example
   * 5d0f37**********ef56db601****
   */
  accessKey?: string;
  /**
   * @remarks
   * Alibaba Cloud customized voice, which is the voice call ID.
   * 
   * @example
   * voice-e1be3a6
   */
  aliCustomizedVoice?: string;
  /**
   * @remarks
   * Voice service type.
   * 
   * - When using **ali** as the custom service, this field stores the appKey of the Intelligent Speech Interaction product project.
   * 
   * - When using **xunfei** as the custom service provider, this field stores the corresponding appKey.
   * 
   * @example
   * xusi*******RnP7
   */
  appKey?: string;
  /**
   * @remarks
   * Storage engine. Valid values: ali, volc, and xunfei.
   * 
   * - When using the default service or selecting Alibaba Cloud as the custom service, set this parameter to **ali**.
   * 
   * - When using the Doubao service, set this parameter to **volc**.
   * - When using xunfei as the service provider, set this parameter to **xunfei**. This value can only be used in small model scenarios.
   * 
   * @example
   * ali
   */
  engine?: string;
  extParams?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a8eccb3c-2b26-4b6d-a54f-696b953e33a6
   */
  instanceId?: string;
  /**
   * @remarks
   * Service type.
   * Managed: The default Intelligent Speech Interaction product service of the Outbound Bot product (public service).
   * Authorized: The Intelligent Speech Interaction product service purchased by the public cloud customer (customer\\"s private service), authorized through Script Management > Edit > Call Service > Custom Service.
   * 
   * > When using Alibaba Cloud Intelligent Speech Interaction, that is, when using Alibaba Cloud as the custom service provider, set this parameter to Authorized.
   * 
   * @example
   * Authorized
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * Pitch.
   * An integer between [-500, 500]. Default value: 0.
   * 
   * A value greater than 0 indicates a higher pitch.
   * 
   * A value less than 0 indicates a lower pitch.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * Script ID.
   * 
   * @example
   * 5ab2d935-306c-478a-88bf-d08e4e25c1b7
   */
  scriptId?: string;
  /**
   * @remarks
   * The AccessKey Secret (SK) for this namespace.
   * 
   * > When the engine is set to xunfei, you must enter the SK.
   * 
   * @example
   * OTdhNDE3Z********zQ****
   */
  secretKey?: string;
  /**
   * @remarks
   * Speech rate.
   * An integer between [-500, 500]. Default value: 0.
   * 
   * A value greater than 0 indicates a faster speech rate.
   * 
   * A value less than 0 indicates a slower speech rate.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * Text content.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  text?: string;
  /**
   * @remarks
   * Voice information, such as aixia, siyue, or xiaoyun. For the complete list of available voices, refer to the voice list below.
   * 
   * > Because the Voice value of a cloned voice is a unique, non-fixed value generated during voice cloning, the specific Voice value cannot be provided at this stage. You must obtain the specific VoiceID from the voice cloning page by calling the ListVoiceClone API.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * Volume.
   * An integer between [0, 100]. Default value: 50.
   * 
   * A value greater than 50 indicates a higher volume.
   * 
   * A value less than 50 indicates a lower volume.
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

