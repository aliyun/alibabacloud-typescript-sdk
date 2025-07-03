// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppAgentTemplateRequestAsrConfigWordWeights } from "./ModifyAppAgentTemplateRequestAsrConfigWordWeights";


export class ModifyAppAgentTemplateRequestAsrConfig extends $dara.Model {
  /**
   * @example
   * 500
   */
  maxSentenceSilence?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STT
   */
  name?: string;
  /**
   * @example
   * 0bb1776b1745123332074d1b6b
   */
  vocabularyId?: string;
  wordWeights?: ModifyAppAgentTemplateRequestAsrConfigWordWeights[];
  static names(): { [key: string]: string } {
    return {
      maxSentenceSilence: 'MaxSentenceSilence',
      name: 'Name',
      vocabularyId: 'VocabularyId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSentenceSilence: 'number',
      name: 'string',
      vocabularyId: 'string',
      wordWeights: { 'type': 'array', 'itemType': ModifyAppAgentTemplateRequestAsrConfigWordWeights },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

