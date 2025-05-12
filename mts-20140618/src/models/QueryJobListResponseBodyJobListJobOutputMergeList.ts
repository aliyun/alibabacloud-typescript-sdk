// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputMergeListMerge } from "./QueryJobListResponseBodyJobListJobOutputMergeListMerge";


export class QueryJobListResponseBodyJobListJobOutputMergeList extends $dara.Model {
  merge?: QueryJobListResponseBodyJobListJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputMergeListMerge },
    };
  }

  validate() {
    if(Array.isArray(this.merge)) {
      $dara.Model.validateArray(this.merge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

