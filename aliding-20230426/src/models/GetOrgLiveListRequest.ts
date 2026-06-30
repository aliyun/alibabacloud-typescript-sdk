// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgLiveListRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class GetOrgLiveListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db4d318xxxxx
   */
  corpId?: string;
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  startTime?: number;
  tenantContext?: GetOrgLiveListRequestTenantContext;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      tenantContext: GetOrgLiveListRequestTenantContext,
      userId: 'string',
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

