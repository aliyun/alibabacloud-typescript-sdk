// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUnbindTemplatesResponseBodyResults } from "./BatchUnbindTemplatesResponseBodyResults";


export class BatchUnbindTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 90B377DF-C874-5BBD-B957-42C4C06AFECE
   */
  requestId?: string;
  results?: BatchUnbindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindTemplatesResponseBodyResults },
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

