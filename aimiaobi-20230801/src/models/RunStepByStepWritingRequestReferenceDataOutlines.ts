// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStepByStepWritingRequestReferenceDataOutlinesArticles } from "./RunStepByStepWritingRequestReferenceDataOutlinesArticles";


export class RunStepByStepWritingRequestReferenceDataOutlines extends $dara.Model {
  articles?: RunStepByStepWritingRequestReferenceDataOutlinesArticles[];
  /**
   * @example
   * 大纲
   */
  outline?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      outline: 'Outline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlinesArticles },
      outline: 'string',
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

