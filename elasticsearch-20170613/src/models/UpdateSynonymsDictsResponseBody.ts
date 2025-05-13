// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSynonymsDictsResponseBodyResult } from "./UpdateSynonymsDictsResponseBodyResult";


export class UpdateSynonymsDictsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C5622CC-B312-426F-85AA-B0271*******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateSynonymsDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateSynonymsDictsResponseBodyResult },
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

