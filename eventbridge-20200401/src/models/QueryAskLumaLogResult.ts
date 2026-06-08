// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AskLumaLogEntry } from "./AskLumaLogEntry";


export class QueryAskLumaLogResult extends $dara.Model {
  entries?: AskLumaLogEntry[];
  hasMore?: boolean;
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

