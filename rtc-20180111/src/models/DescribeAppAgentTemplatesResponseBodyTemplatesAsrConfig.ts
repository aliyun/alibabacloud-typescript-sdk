// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights } from "./DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights";


export class DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig extends $dara.Model {
  /**
   * @example
   * 300
   */
  maxSentenceSilence?: number;
  name?: string;
  /**
   * @example
   * ecfadace11114cf08a7f07aceee798ad
   */
  vocabularyId?: string;
  wordWeights?: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights[];
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
      wordWeights: { 'type': 'array', 'itemType': DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights },
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

