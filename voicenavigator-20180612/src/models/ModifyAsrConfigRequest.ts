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
  engine?: string;
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
   * 语音识别
   */
  nlsServiceType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      asrAcousticModelId: 'AsrAcousticModelId',
      asrClassVocabularyId: 'AsrClassVocabularyId',
      asrCustomizationId: 'AsrCustomizationId',
      asrOverrides: 'AsrOverrides',
      asrVocabularyId: 'AsrVocabularyId',
      configLevel: 'ConfigLevel',
      engine: 'Engine',
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
      asrVocabularyId: 'string',
      configLevel: 'number',
      engine: 'string',
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

