// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: ResetAccountPasswordResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A6A077A-577C-536E-AC13-8E715D7A34C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ResetAccountPasswordResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

