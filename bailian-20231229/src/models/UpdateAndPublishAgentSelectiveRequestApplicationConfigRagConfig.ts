// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndPublishAgentSelectiveRequestApplicationConfigRagConfig extends $dara.Model {
  answerScope?: string;
  enableCitation?: boolean;
  enableSearch?: boolean;
  enableWebSearch?: boolean;
  fixedReplyDetail?: string;
  knowledgeBaseCodeList?: string[];
  promptStrategy?: string;
  ragRejectType?: string;
  rejectFilterPrompt?: string;
  rejectFilterType?: string;
  retrieveMaxLength?: number;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      answerScope: 'answerScope',
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      enableWebSearch: 'enableWebSearch',
      fixedReplyDetail: 'fixedReplyDetail',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      promptStrategy: 'promptStrategy',
      ragRejectType: 'ragRejectType',
      rejectFilterPrompt: 'rejectFilterPrompt',
      rejectFilterType: 'rejectFilterType',
      retrieveMaxLength: 'retrieveMaxLength',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerScope: 'string',
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      enableWebSearch: 'boolean',
      fixedReplyDetail: 'string',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      promptStrategy: 'string',
      ragRejectType: 'string',
      rejectFilterPrompt: 'string',
      rejectFilterType: 'string',
      retrieveMaxLength: 'number',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseCodeList)) {
      $dara.Model.validateArray(this.knowledgeBaseCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

