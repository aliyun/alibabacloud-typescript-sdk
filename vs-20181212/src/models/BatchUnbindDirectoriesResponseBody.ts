// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUnbindDirectoriesResponseBodyResults } from "./BatchUnbindDirectoriesResponseBodyResults";


export class BatchUnbindDirectoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 64DB7F34-11A8-45DC-A421-40ACF446282C
   */
  requestId?: string;
  results?: BatchUnbindDirectoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindDirectoriesResponseBodyResults },
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

