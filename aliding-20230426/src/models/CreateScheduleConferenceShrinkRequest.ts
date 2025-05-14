// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleConferenceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687928400000L
   */
  endTime?: number;
  scheduleConfSettingModelShrink?: string;
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
      scheduleConfSettingModelShrink: 'ScheduleConfSettingModel',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      scheduleConfSettingModelShrink: 'string',
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

