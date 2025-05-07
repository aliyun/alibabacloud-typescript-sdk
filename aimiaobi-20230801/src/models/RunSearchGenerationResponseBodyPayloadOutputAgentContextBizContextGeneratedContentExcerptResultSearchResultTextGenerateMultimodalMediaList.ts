// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList extends $dara.Model {
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      docUuid: 'DocUuid',
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docUuid: 'string',
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMediaList)) {
      $dara.Model.validateArray(this.multimodalMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

