// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMemberListRequestTenantContext extends $dara.Model {
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

export class GetDingtalkMeetingMemberListRequest extends $dara.Model {
  tenantContext?: GetDingtalkMeetingMemberListRequestTenantContext;
  /**
   * @example
   * cluster-1
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      clusterName: 'clusterName',
      conferenceId: 'conferenceId',
      currentPage: 'currentPage',
      orgId: 'orgId',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkMeetingMemberListRequestTenantContext,
      clusterName: 'string',
      conferenceId: 'string',
      currentPage: 'number',
      orgId: 'string',
      pageSize: 'number',
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

