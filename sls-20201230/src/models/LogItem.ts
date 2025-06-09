// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogContent } from "./LogContent";


export class LogItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: LogContent[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1690254376
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': LogContent },
      time: 'number',
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

