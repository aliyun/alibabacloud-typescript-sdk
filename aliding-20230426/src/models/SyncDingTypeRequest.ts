// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncDingTypeRequestTenantContext } from "./SyncDingTypeRequestTenantContext";


export class SyncDingTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ANT_DING
   */
  dingType?: string;
  /**
   * @example
   * y
   */
  isDimission?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * antding
   */
  source?: string;
  tenantContext?: SyncDingTypeRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      dingType: 'DingType',
      isDimission: 'IsDimission',
      source: 'Source',
      tenantContext: 'TenantContext',
      workNo: 'WorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingType: 'string',
      isDimission: 'string',
      source: 'string',
      tenantContext: SyncDingTypeRequestTenantContext,
      workNo: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

