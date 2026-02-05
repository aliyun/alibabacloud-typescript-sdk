// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultimodalOriginalQuery } from "./MultimodalOriginalQuery";


export class MultimodalQueryContext extends $dara.Model {
  originalQuery?: MultimodalOriginalQuery;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: MultimodalOriginalQuery,
    };
  }

  validate() {
    if(this.originalQuery && typeof (this.originalQuery as any).validate === 'function') {
      (this.originalQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

