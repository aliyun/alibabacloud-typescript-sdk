// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConferenceRequestTenantContext extends $dara.Model {
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

export class UpdateScheduleConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687928400000L
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a489xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687924800000L
   */
  startTime?: number;
  tenantContext?: UpdateScheduleConferenceRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 预约会议标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      scheduleConferenceId: 'ScheduleConferenceId',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      scheduleConferenceId: 'string',
      startTime: 'number',
      tenantContext: UpdateScheduleConferenceRequestTenantContext,
      title: 'string',
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

