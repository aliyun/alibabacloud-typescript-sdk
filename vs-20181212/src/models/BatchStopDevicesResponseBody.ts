// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchStopDevicesResponseBodyResults } from "./BatchStopDevicesResponseBodyResults";


export class BatchStopDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStopDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStopDevicesResponseBodyResults },
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

