// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyLogResourceLogsLogs extends $dara.Model {
  /**
   * @remarks
   * The content of a resource log.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * The keywords of a resource log.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

