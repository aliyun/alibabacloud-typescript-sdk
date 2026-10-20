// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audit write status. Valid values: ok and degraded.
   * 
   * @example
   * ok
   */
  auditStatus?: string;
  /**
   * @remarks
   * The recall event ID. You can use this ID to call the GetContextStoreRecall operation to view audit details.
   * 
   * @example
   * 0190f1c2-7d3e-7a1b-9c4d-2e5f6a7b8c9d
   */
  recallEventId?: string;
  /**
   * @remarks
   * The request ID, which can be used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The list of retrieval results, sorted by similarity in descending order.
   */
  results?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'auditStatus',
      recallEventId: 'recallEventId',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      recallEventId: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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

