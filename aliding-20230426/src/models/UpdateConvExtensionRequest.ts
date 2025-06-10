// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConvExtensionRequestTenantContext } from "./UpdateConvExtensionRequestTenantContext";


export class UpdateConvExtensionRequest extends $dara.Model {
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
  staffIdList?: string[];
  /**
   * @example
   * 546374856
   */
  systemUid?: string;
  tenantContext?: UpdateConvExtensionRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      mobileUrl: 'MobileUrl',
      pcUrl: 'PcUrl',
      staffIdList: 'StaffIdList',
      systemUid: 'SystemUid',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileUrl: 'string',
      pcUrl: 'string',
      staffIdList: { 'type': 'array', 'itemType': 'string' },
      systemUid: 'string',
      tenantContext: UpdateConvExtensionRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.staffIdList)) {
      $dara.Model.validateArray(this.staffIdList);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

