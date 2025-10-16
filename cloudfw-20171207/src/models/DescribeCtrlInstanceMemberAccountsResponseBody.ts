// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCtrlInstanceMemberAccountsResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  instanceMemberCount?: number;
  /**
   * @example
   * 1000
   */
  maxInstanceMemberNum?: number;
  /**
   * @example
   * 9CC69FDA-69F6-585B-9262-A306F425****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceMemberCount: 'InstanceMemberCount',
      maxInstanceMemberNum: 'MaxInstanceMemberNum',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMemberCount: 'number',
      maxInstanceMemberNum: 'number',
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

