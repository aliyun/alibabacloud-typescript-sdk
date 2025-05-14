// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmarttagJobResponseBodyResultsResult } from "./QuerySmarttagJobResponseBodyResultsResult";


export class QuerySmarttagJobResponseBodyResults extends $dara.Model {
  result?: QuerySmarttagJobResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyResultsResult },
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

