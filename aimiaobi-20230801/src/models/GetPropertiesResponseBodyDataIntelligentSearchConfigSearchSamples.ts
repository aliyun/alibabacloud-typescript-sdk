// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles } from "./GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles";


export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples extends $dara.Model {
  articles?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles[];
  /**
   * @example
   * xx
   */
  prompt?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      prompt: 'Prompt',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles },
      prompt: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

