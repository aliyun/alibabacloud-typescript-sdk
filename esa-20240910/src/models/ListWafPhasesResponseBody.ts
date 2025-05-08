// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafPhasesResponseBodyPhases } from "./ListWafPhasesResponseBodyPhases";


export class ListWafPhasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of WAF operation phases.
   */
  phases?: ListWafPhasesResponseBodyPhases[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      phases: 'Phases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phases: { 'type': 'array', 'itemType': ListWafPhasesResponseBodyPhases },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phases)) {
      $dara.Model.validateArray(this.phases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

