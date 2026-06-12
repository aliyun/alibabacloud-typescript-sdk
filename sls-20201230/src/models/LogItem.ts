// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogContent } from "./LogContent";


export class LogItem extends $dara.Model {
  /**
   * @remarks
   * A list of log fields.
   * 
   * This parameter is required.
   */
  contents?: LogContent[];
  /**
   * @remarks
   * The time of the log, formatted as a Unix timestamp. It represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1690254376
   */
  time?: number;
  /**
   * @example
   * 123456789
   */
  timeNs?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      time: 'Time',
      timeNs: 'TimeNs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': LogContent },
      time: 'number',
      timeNs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

