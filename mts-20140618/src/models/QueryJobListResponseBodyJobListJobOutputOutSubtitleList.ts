// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle } from "./QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle";


export class QueryJobListResponseBodyJobListJobOutputOutSubtitleList extends $dara.Model {
  outSubtitle?: QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputOutSubtitleListOutSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.outSubtitle)) {
      $dara.Model.validateArray(this.outSubtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

