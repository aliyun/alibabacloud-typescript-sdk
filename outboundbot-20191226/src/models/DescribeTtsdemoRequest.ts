// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSDemoRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey (AK) for this namespace.
   * 
   * > Enter the AK when the engine is xunfei.
   * 
   * @example
   * 5d0f37**********ef56db601****
   */
  accessKey?: string;
  /**
   * @remarks
   * Alibaba Cloud custom voice ID
   * 
   * @example
   * voice-e1be3a6
   */
  aliCustomizedVoice?: string;
  /**
   * @remarks
   * Speech service type
   * 
   * - When using **ali** as a custom service, enter the appKey of your Intelligent Speech Interaction project.
   * 
   * - When using **xunfei** as a custom service, enter its appKey.
   * 
   * @example
   * xusi*******RnP7
   */
  appKey?: string;
  /**
   * @remarks
   * Storage engine. Choose from ali, volc, or xunfei.
   * 
   * - Enter **ali** when using the default service or Alibaba Cloud as a custom service.
   * 
   * - Enter **volc** when using the doubao service.
   * 
   * - Enter **xunfei** when using iFLYTEK as a service provider. This option is only available for small-model scenarios.
   * 
   * @example
   * ali
   */
  engine?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * a8eccb3c-2b26-4b6d-a54f-696b953e33a6
   */
  instanceId?: string;
  /**
   * @remarks
   * Service type
   * Managed: The default Intelligent Speech Interaction service for Intelligent Outbound Calling (public service).
   * Authorized: An Intelligent Speech Interaction service you purchased on Alibaba Cloud public cloud (your private service). You can grant authorization by going to Scenario Management > Edit > Call Service > Custom Service.
   * 
   * > Set this parameter to Authorized when using Alibaba Cloud\\"s Intelligent Speech Interaction as your custom service provider.
   * 
   * @example
   * Authorized
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * Pitch. An integer between -500 and 500. Default is 0.
   * 
   * A value greater than 0 raises pitch.
   * 
   * A value less than 0 lowers pitch.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 5ab2d935-306c-478a-88bf-d08e4e25c1b7
   */
  scriptId?: string;
  /**
   * @remarks
   * The AccessKey secret (SK) for this namespace.
   * 
   * > Enter the SK when the engine is xunfei.
   * 
   * @example
   * OTdhNDE3Z********zQ****
   */
  secretKey?: string;
  /**
   * @remarks
   * Speech rate. An integer between -500 and 500. Default is 0.
   * 
   * A value greater than 0 increases speech speed.
   * 
   * A value less than 0 decreases speech speed.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * Text to convert to speech
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  text?: string;
  /**
   * @remarks
   * Voice ID. Examples include aixia, siyue, and xiaoyun. For the full list of available voices, see the voice list below.
   * 
   * > Cloned voices use dynamic Voice IDs that are generated during voice cloning. Therefore, specific Voice IDs for cloned voices are not listed here. To get a cloned voice’s Voice ID, call ListVoiceClone from the voice cloning page.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * Volume. An integer between 0 and 100. Default is 50.
   * 
   * A value greater than 50 increases volume.
   * 
   * A value less than 50 decreases volume.
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

