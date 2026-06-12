// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogItem } from "./LogItem";
import { LogTag } from "./LogTag";


export class LogGroup extends $dara.Model {
  /**
   * @remarks
   * A list of logs.
   * 
   * This parameter is required.
   */
  logItems?: LogItem[];
  /**
   * @remarks
   * The list of tags for the log.
   */
  logTags?: LogTag[];
  /**
   * @remarks
   * The source of the log. For example, the IP address of the machine that generated the log.
   * 
   * @example
   * 192.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The topic of the log. This is a user-defined field that distinguishes log data with different features.
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

