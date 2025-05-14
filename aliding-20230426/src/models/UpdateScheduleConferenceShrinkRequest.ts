// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConferenceShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      scheduleConferenceId: 'string',
      startTime: 'number',
      tenantContextShrink: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

