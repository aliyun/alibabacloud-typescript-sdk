// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchStartStreamsResponseBodyResults } from "./BatchStartStreamsResponseBodyResults";


export class BatchStartStreamsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStartStreamsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStartStreamsResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

