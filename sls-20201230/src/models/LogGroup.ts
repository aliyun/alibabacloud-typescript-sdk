// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogItem } from "./LogItem";
import { LogTag } from "./LogTag";


export class LogGroup extends $dara.Model {
  /**
   * @remarks
   * The log list.
   * 
   * This parameter is required.
   */
  logItems?: LogItem[];
  /**
   * @remarks
   * The log tags.
   */
  logTags?: LogTag[];
  /**
   * @remarks
   * The log source. For example, the source of a log can be the IP address of the server where the log is generated.
   * 
   * @example
   * 192.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The log topic. This field is user-defined and is used to distinguish between logs.
   * 
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

