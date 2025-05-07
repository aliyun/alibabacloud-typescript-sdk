// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  newsElementArticleList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList[];
  /**
   * @example
   * x
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      newsElementArticleList: 'NewsElementArticleList',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      newsElementArticleList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList },
      textGenerate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.newsElementArticleList)) {
      $dara.Model.validateArray(this.newsElementArticleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

