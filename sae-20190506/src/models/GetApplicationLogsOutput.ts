// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogEntry } from "./LogEntry";


export class GetApplicationLogsOutput extends $dara.Model {
  logEntrys?: LogEntry[];
  nextOffset?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logEntrys: 'logEntrys',
      nextOffset: 'nextOffset',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntrys: { 'type': 'array', 'itemType': LogEntry },
      nextOffset: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logEntrys)) {
      $dara.Model.validateArray(this.logEntrys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

