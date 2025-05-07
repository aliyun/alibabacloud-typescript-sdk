// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent extends $dara.Model {
  causeList?: string[];
  processList?: string[];
  resultList?: string[];
  static names(): { [key: string]: string } {
    return {
      causeList: 'CauseList',
      processList: 'ProcessList',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causeList: { 'type': 'array', 'itemType': 'string' },
      processList: { 'type': 'array', 'itemType': 'string' },
      resultList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.causeList)) {
      $dara.Model.validateArray(this.causeList);
    }
    if(Array.isArray(this.processList)) {
      $dara.Model.validateArray(this.processList);
    }
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

