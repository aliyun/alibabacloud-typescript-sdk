// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogContentsResponseBodyListLogContentContents } from "./ListLogContentsResponseBodyListLogContentContents";


export class ListLogContentsResponseBodyListLogContent extends $dara.Model {
  /**
   * @remarks
   * List of log line contents.
   */
  contents?: ListLogContentsResponseBodyListLogContentContents[];
  /**
   * @remarks
   * Total number of log lines.
   * 
   * @example
   * 10
   */
  totalLength?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      totalLength: 'totalLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': ListLogContentsResponseBodyListLogContentContents },
      totalLength: 'number',
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

