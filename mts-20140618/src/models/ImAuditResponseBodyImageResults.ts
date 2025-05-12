// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyImageResultsResult } from "./ImAuditResponseBodyImageResultsResult";


export class ImAuditResponseBodyImageResults extends $dara.Model {
  /**
   * @remarks
   * The image moderation results.
   */
  result?: ImAuditResponseBodyImageResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResult },
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

