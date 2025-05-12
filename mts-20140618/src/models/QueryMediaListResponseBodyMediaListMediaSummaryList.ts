// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaSummaryListSummary } from "./QueryMediaListResponseBodyMediaListMediaSummaryListSummary";


export class QueryMediaListResponseBodyMediaListMediaSummaryList extends $dara.Model {
  summary?: QueryMediaListResponseBodyMediaListMediaSummaryListSummary[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSummaryListSummary },
    };
  }

  validate() {
    if(Array.isArray(this.summary)) {
      $dara.Model.validateArray(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

