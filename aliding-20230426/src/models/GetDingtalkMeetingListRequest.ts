// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingListRequestTenantContext extends $dara.Model {
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

export class GetDingtalkMeetingListRequest extends $dara.Model {
  tenantContext?: GetDingtalkMeetingListRequestTenantContext;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1732953600000
   */
  endTime?: number;
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
  /**
   * @example
   * 123456789
   */
  roomCode?: string;
  /**
   * @example
   * 会议室A
   */
  roomName?: string;
  /**
   * @example
   * 1732867200000
   */
  startTime?: number;
  /**
   * @example
   * 34343
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      currentPage: 'currentPage',
      endTime: 'endTime',
      orgId: 'orgId',
      pageSize: 'pageSize',
      roomCode: 'roomCode',
      roomName: 'roomName',
      startTime: 'startTime',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkMeetingListRequestTenantContext,
      currentPage: 'number',
      endTime: 'number',
      orgId: 'string',
      pageSize: 'number',
      roomCode: 'string',
      roomName: 'string',
      startTime: 'number',
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

