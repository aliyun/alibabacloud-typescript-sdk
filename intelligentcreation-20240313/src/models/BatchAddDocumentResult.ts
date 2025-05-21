// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDocumentResult } from "./AddDocumentResult";


export class BatchAddDocumentResult extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addDocumentResults?: AddDocumentResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addDocumentResults: 'addDocumentResults',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addDocumentResults: { 'type': 'array', 'itemType': AddDocumentResult },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addDocumentResults)) {
      $dara.Model.validateArray(this.addDocumentResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

