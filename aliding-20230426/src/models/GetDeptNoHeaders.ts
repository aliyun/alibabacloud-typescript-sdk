// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeptNoHeadersAccountContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeptNoHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: GetDeptNoHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: GetDeptNoHeadersAccountContext,
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    if(this.accountContext && typeof (this.accountContext as any).validate === 'function') {
      (this.accountContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

