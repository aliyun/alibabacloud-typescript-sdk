// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAsrConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the engine.
   * 
   * @example
   * your_app_key
   */
  appKey?: string;
  /**
   * @remarks
   * The ASR acoustic model ID.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrAcousticModelId?: string;
  /**
   * @remarks
   * The ASR hotword ID.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrClassVocabularyId?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrCustomizationId?: string;
  asrOverrides?: string;
  /**
   * @remarks
   * The ASR error correction dictionary ID.
   * 
   * @example
   * 94001ae8-72fd-4f93-84dc-e58e2b20363b
   */
  asrOverridesUuid?: string;
  /**
   * @remarks
   * The hotword ID. You can view the ASR hotword ID on the [ASR Hotword Management page](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi).
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * The policy level. Valid values:
   * 
   * - 0: system.
   * - 1: tenant.
   * - 2: instance.
   * 
   * @example
   * 0
   */
  configLevel?: number;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * ali
   */
  engine?: string;
  /**
   * @remarks
   * The iFLYTEK ASR configuration parameters.
   * 
   * @example
   * {"Uuid":"b06c4ed3-a5e3-4c55-92b7-c2d2a88ca37f"}
   */
  engineXunfei?: string;
  /**
   * @remarks
   * The entity ID corresponding to config_level.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  entryId?: string;
  /**
   * @remarks
   * NluServiceType
   * 
   * @example
   * Speech Recognition
   */
  nlsServiceType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      asrAcousticModelId: 'AsrAcousticModelId',
      asrClassVocabularyId: 'AsrClassVocabularyId',
      asrCustomizationId: 'AsrCustomizationId',
      asrOverrides: 'AsrOverrides',
      asrOverridesUuid: 'AsrOverridesUuid',
      asrVocabularyId: 'AsrVocabularyId',
      configLevel: 'ConfigLevel',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      entryId: 'EntryId',
      nlsServiceType: 'NlsServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      asrAcousticModelId: 'string',
      asrClassVocabularyId: 'string',
      asrCustomizationId: 'string',
      asrOverrides: 'string',
      asrOverridesUuid: 'string',
      asrVocabularyId: 'string',
      configLevel: 'number',
      engine: 'string',
      engineXunfei: 'string',
      entryId: 'string',
      nlsServiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

