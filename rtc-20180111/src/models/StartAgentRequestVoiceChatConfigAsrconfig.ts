// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestVoiceChatConfigASRConfig extends $dara.Model {
  languageHints?: string[];
  /**
   * @example
   * 800
   */
  maxSentenceSilence?: number;
  /**
   * @example
   * false
   */
  semanticPunctuationEnabled?: boolean;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @example
   * vocab-xxx-24ee19fa8cfb4d52902170a0xxxxxxxx
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      languageHints: 'LanguageHints',
      maxSentenceSilence: 'MaxSentenceSilence',
      semanticPunctuationEnabled: 'SemanticPunctuationEnabled',
      sourceLanguage: 'SourceLanguage',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageHints: { 'type': 'array', 'itemType': 'string' },
      maxSentenceSilence: 'number',
      semanticPunctuationEnabled: 'boolean',
      sourceLanguage: 'string',
      vocabularyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

