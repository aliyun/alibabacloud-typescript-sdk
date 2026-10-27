// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitTenantAliasResponseBodyAliasInfo extends $dara.Model {
  /**
   * @remarks
   * The reason why editing is not allowed.
   * 
   * @example
   * FrequencyExceedsLimit
   */
  aliasEditDisabledReason?: string;
  /**
   * @remarks
   * Indicates whether editing is allowed.
   * 
   * @example
   * False
   */
  aliasEditable?: boolean;
  /**
   * @remarks
   * The source of the organization ID.
   * 
   * @example
   * Customized
   */
  aliasSourceType?: string;
  /**
   * @remarks
   * The time when editing is allowed, in the YYYY-MM-DD HH:mm:ss format.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  aliasInfo?: InitTenantAliasResponseBodyAliasInfo;
  /**
   * @remarks
   * The generated organization ID.
   * 
   * @example
   * WY23***
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

