// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLiveWatchUserListRequestTenantContext extends $dara.Model {
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

export class QueryLiveWatchUserListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveId?: string;
  /**
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  tenantContext?: QueryLiveWatchUserListRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantContext: QueryLiveWatchUserListRequestTenantContext,
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

