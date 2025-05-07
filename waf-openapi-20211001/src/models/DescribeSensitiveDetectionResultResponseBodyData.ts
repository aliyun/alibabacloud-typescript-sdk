// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSensitiveDetectionResultResponseBodyDataResult } from "./DescribeSensitiveDetectionResultResponseBodyDataResult";


export class DescribeSensitiveDetectionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compliance checks.
   */
  result?: DescribeSensitiveDetectionResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DescribeSensitiveDetectionResultResponseBodyDataResult },
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

