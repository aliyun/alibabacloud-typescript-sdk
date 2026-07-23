// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AskLumaLogEntry } from "./AskLumaLogEntry";


export class QueryAskLumaLogResult extends $dara.Model {
  /**
   * @remarks
   * The log entries returned by the query.
   */
  entries?: AskLumaLogEntry[];
  /**
   * @remarks
   * Specifies whether more results are available. The value is `true` if more results can be retrieved, and `false` otherwise.
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The token to use for retrieving the next page of results. If present, pass this value as the `LastKey` parameter in a subsequent request to fetch more data. This field is omitted when all results have been retrieved.
   */
  lastKey?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      hasMore: 'HasMore',
      lastKey: 'LastKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': AskLumaLogEntry },
      hasMore: 'boolean',
      lastKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

