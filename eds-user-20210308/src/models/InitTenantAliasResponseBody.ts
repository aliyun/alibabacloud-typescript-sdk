// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitTenantAliasResponseBodyAliasInfo extends $dara.Model {
  /**
   * @example
   * FrequencyExceedsLimit
   */
  aliasEditDisabledReason?: string;
  /**
   * @example
   * False
   */
  aliasEditable?: boolean;
  /**
   * @example
   * Customized
   */
  aliasSourceType?: string;
  /**
   * @example
   * 2025-04-17 20:31:48
   */
  nextModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliasEditDisabledReason: 'AliasEditDisabledReason',
      aliasEditable: 'AliasEditable',
      aliasSourceType: 'AliasSourceType',
      nextModifyTime: 'NextModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasEditDisabledReason: 'string',
      aliasEditable: 'boolean',
      aliasSourceType: 'string',
      nextModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

