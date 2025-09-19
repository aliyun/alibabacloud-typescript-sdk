// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspiciousUUIDConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of servers on which proactive defense of the specified type takes effect.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6044DC07-86F1-5DDA-A611-EC578EA4EEE6
   */
  requestId?: string;
  /**
   * @remarks
   * The UUIDs of servers on which proactive defense of the specified type takes effect.
   */
  UUIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      UUIDList: 'UUIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      UUIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.UUIDList)) {
      $dara.Model.validateArray(this.UUIDList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

