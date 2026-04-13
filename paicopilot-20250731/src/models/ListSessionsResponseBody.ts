// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Session } from "./Session";


export class ListSessionsResponseBody extends $dara.Model {
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  sessions?: Session[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': Session },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

