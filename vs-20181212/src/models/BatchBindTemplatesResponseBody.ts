// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchBindTemplatesResponseBodyResults } from "./BatchBindTemplatesResponseBodyResults";


export class BatchBindTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 20D0DFCE-5DB7-5D83-BD82-8482F2327636
   */
  requestId?: string;
  results?: BatchBindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindTemplatesResponseBodyResults },
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

