// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate } from "./QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate";


export class QueryJobListResponseBodyJobListJobOutputTailSlateList extends $dara.Model {
  tailSlate?: QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate },
    };
  }

  validate() {
    if(Array.isArray(this.tailSlate)) {
      $dara.Model.validateArray(this.tailSlate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

