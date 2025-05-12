// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary } from "./QueryMediaListByUrlresponseBodyMediaListMediaSummaryListSummary";


export class QueryMediaListByURLResponseBodyMediaListMediaSummaryList extends $dara.Model {
  summary?: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary },
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

