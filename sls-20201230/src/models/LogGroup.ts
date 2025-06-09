// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogItem } from "./LogItem";
import { LogTag } from "./LogTag";


export class LogGroup extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  logItems?: LogItem[];
  logTags?: LogTag[];
  /**
   * @example
   * 192.1.1.1
   */
  source?: string;
  /**
   * @example
   * topic-test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      logItems: 'LogItems',
      logTags: 'LogTags',
      source: 'Source',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logItems: { 'type': 'array', 'itemType': LogItem },
      logTags: { 'type': 'array', 'itemType': LogTag },
      source: 'string',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logItems)) {
      $dara.Model.validateArray(this.logItems);
    }
    if(Array.isArray(this.logTags)) {
      $dara.Model.validateArray(this.logTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

