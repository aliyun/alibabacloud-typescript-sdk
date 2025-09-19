// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the members.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BF880
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

