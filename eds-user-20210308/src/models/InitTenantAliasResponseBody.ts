// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitTenantAliasResponseBodyAliasInfo } from "./InitTenantAliasResponseBodyAliasInfo";


export class InitTenantAliasResponseBody extends $dara.Model {
  aliasInfo?: InitTenantAliasResponseBodyAliasInfo;
  /**
   * @example
   * WY23***
   */
  data?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasInfo: 'AliasInfo',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfo: InitTenantAliasResponseBodyAliasInfo,
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.aliasInfo && typeof (this.aliasInfo as any).validate === 'function') {
      (this.aliasInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

