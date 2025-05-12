// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingV2RequestOutlinesArticles } from "./RunWritingV2requestOutlinesArticles";


export class RunWritingV2RequestOutlines extends $dara.Model {
  articles?: RunWritingV2RequestOutlinesArticles[];
  outline?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      outline: 'Outline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2RequestOutlinesArticles },
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

