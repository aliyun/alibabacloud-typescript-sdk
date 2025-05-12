// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyTextResultsResult } from "./ImAuditResponseBodyTextResultsResult";


export class ImAuditResponseBodyTextResults extends $dara.Model {
  /**
   * @remarks
   * The text moderation results.
   */
  result?: ImAuditResponseBodyTextResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResult },
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

