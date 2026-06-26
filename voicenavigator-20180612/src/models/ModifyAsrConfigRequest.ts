// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAsrConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey for the engine.
   * 
   * @example
   * your_app_key
   */
  appKey?: string;
  /**
   * @remarks
   * The ID of the ASR acoustic model.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrAcousticModelId?: string;
  /**
   * @remarks
   * The ID of the ASR class-based vocabulary.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrClassVocabularyId?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrCustomizationId?: string;
  asrOverrides?: string;
  /**
   * @remarks
   * The ID of the hotword. You can find this ID on the [ASR Hotword Management](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi) page.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * The policy level. Valid values: `0` (system), `1` (tenant), and `2` (instance).
   * 
   * @example
   * 0
   */
  configLevel?: number;
  engine?: string;
  /**
   * @remarks
   * The entity ID for the specified `ConfigLevel`.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  entryId?: string;
  /**
   * @remarks
   * The service type of Intelligent Speech Interaction.
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

