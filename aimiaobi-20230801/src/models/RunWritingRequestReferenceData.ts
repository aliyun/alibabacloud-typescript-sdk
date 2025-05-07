// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingRequestReferenceDataArticles } from "./RunWritingRequestReferenceDataArticles";


export class RunWritingRequestReferenceData extends $dara.Model {
  articles?: RunWritingRequestReferenceDataArticles[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingRequestReferenceDataArticles },
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

