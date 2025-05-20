// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchResponseBodyResponses } from "./BatchResponseBodyResponses";


export class BatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * All responses of the child requests.
   */
  responses?: BatchResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      responses: 'responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responses: { 'type': 'array', 'itemType': BatchResponseBodyResponses },
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

