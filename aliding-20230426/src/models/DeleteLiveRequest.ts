// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLiveRequestTenantContext } from "./DeleteLiveRequestTenantContext";


export class DeleteLiveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveId?: string;
  tenantContext?: DeleteLiveRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      tenantContext: DeleteLiveRequestTenantContext,
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

