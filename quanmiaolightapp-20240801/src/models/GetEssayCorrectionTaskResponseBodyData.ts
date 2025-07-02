// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEssayCorrectionTaskResponseBodyDataResults } from "./GetEssayCorrectionTaskResponseBodyDataResults";


export class GetEssayCorrectionTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  results?: GetEssayCorrectionTaskResponseBodyDataResults[];
  /**
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetEssayCorrectionTaskResponseBodyDataResults },
      status: 'string',
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

