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

