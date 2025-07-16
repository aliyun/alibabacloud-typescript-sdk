// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleRequestTenantContext extends $dara.Model {
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

export class GetScheduleRequest extends $dara.Model {
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  endTime?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  startTime?: string;
  tenantContext?: GetScheduleRequestTenantContext;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      tenantContext: GetScheduleRequestTenantContext,
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

