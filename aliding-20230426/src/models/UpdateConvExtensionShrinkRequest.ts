// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConvExtensionShrinkRequest extends $dara.Model {
  /**
   * @example
   * https://xxx
   */
  mobileUrl?: string;
  /**
   * @example
   * https://xxx
   */
  pcUrl?: string;
  staffIdListShrink?: string;
  /**
   * @example
   * 546374856
   */
  systemUid?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      mobileUrl: 'MobileUrl',
      pcUrl: 'PcUrl',
      staffIdListShrink: 'StaffIdList',
      systemUid: 'SystemUid',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileUrl: 'string',
      pcUrl: 'string',
      staffIdListShrink: 'string',
      systemUid: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

