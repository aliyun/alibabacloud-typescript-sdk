// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatInstanceSessionsRequest extends $dara.Model {
  /**
   * @example
   * ["8C9F2D4E-7A6B-4F1C-9E53-0B2C8D3F9A4B"]
   * 
   * **if can be null:**
   * true
   */
  sessionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sessionIds: 'sessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

