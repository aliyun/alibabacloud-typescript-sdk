// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachKeyPairResponseBodyResultsResult } from "./DetachKeyPairResponseBodyResultsResult";


export class DetachKeyPairResponseBodyResults extends $dara.Model {
  result?: DetachKeyPairResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DetachKeyPairResponseBodyResultsResult },
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

