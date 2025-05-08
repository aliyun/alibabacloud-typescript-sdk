// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTranslateImageBatchResultResponseBodyDataResult } from "./GetTranslateImageBatchResultResponseBodyDataResult";


export class GetTranslateImageBatchResultResponseBodyData extends $dara.Model {
  result?: GetTranslateImageBatchResultResponseBodyDataResult[];
  /**
   * @example
   * finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetTranslateImageBatchResultResponseBodyDataResult },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

