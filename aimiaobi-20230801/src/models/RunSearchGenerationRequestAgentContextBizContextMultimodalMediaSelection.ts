// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult } from "./RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult";


export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection extends $dara.Model {
  /**
   * @example
   * 原始会话唯一标识：搜索结果取这个会话中的全量，目前仅媒资搜索场景需要
   */
  originalSessionId?: string;
  /**
   * @example
   * TextGenerate
   */
  searchModel?: string;
  /**
   * @example
   * 分类1
   */
  searchModelDataValue?: string;
  /**
   * @example
   * all
   */
  selectionType?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  textSearchResult?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult;
  static names(): { [key: string]: string } {
    return {
      originalSessionId: 'OriginalSessionId',
      searchModel: 'SearchModel',
      searchModelDataValue: 'SearchModelDataValue',
      selectionType: 'SelectionType',
      sessionId: 'SessionId',
      textSearchResult: 'TextSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalSessionId: 'string',
      searchModel: 'string',
      searchModelDataValue: 'string',
      selectionType: 'string',
      sessionId: 'string',
      textSearchResult: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult,
    };
  }

  validate() {
    if(this.textSearchResult && typeof (this.textSearchResult as any).validate === 'function') {
      (this.textSearchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

