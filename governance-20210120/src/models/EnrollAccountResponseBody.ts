// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrollAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 143165363236****
   */
  accountUid?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7071E5FA-515E-5F53-B335-B87D619C6A66
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

