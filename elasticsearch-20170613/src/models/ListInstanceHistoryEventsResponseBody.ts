// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceHistoryEventsResponseBodyHeaders } from "./ListInstanceHistoryEventsResponseBodyHeaders";
import { ListInstanceHistoryEventsResponseBodyResult } from "./ListInstanceHistoryEventsResponseBodyResult";


export class ListInstanceHistoryEventsResponseBody extends $dara.Model {
  headers?: ListInstanceHistoryEventsResponseBodyHeaders;
  /**
   * @example
   * D1A6830A-F59B-4E05-BFAC-9496C21DBBA7
   */
  requestId?: string;
  result?: ListInstanceHistoryEventsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceHistoryEventsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceHistoryEventsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

