// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAsrConfigRequest extends $dara.Model {
  /**
   * @example
   * your_app_key
   */
  appKey?: string;
  /**
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrAcousticModelId?: string;
  /**
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrClassVocabularyId?: string;
  /**
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrCustomizationId?: string;
  asrOverrides?: string;
  /**
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  asrVocabularyId?: string;
  /**
   * @example
   * 0
   */
  configLevel?: number;
  engine?: string;
  /**
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  entryId?: string;
  /**
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

