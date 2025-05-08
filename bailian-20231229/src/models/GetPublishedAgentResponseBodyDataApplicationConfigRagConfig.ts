// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublishedAgentResponseBodyDataApplicationConfigRagConfig extends $dara.Model {
  enableCitation?: boolean;
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
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

