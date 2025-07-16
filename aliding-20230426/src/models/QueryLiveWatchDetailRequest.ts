// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveWatchDetailRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveWatchDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveId?: string;
  tenantContext?: QueryLiveWatchDetailRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      tenantContext: QueryLiveWatchDetailRequestTenantContext,
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

