// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScheduleConferenceRequestScheduleConfSettingModel } from "./CreateScheduleConferenceRequestScheduleConfSettingModel";
import { CreateScheduleConferenceRequestTenantContext } from "./CreateScheduleConferenceRequestTenantContext";


export class CreateScheduleConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687928400000L
   */
  endTime?: number;
  scheduleConfSettingModel?: CreateScheduleConferenceRequestScheduleConfSettingModel;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1687924800000L
   */
  startTime?: number;
  tenantContext?: CreateScheduleConferenceRequestTenantContext;
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
      scheduleConfSettingModel: 'ScheduleConfSettingModel',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      scheduleConfSettingModel: CreateScheduleConferenceRequestScheduleConfSettingModel,
      startTime: 'number',
      tenantContext: CreateScheduleConferenceRequestTenantContext,
      title: 'string',
    };
  }

  validate() {
    if(this.scheduleConfSettingModel && typeof (this.scheduleConfSettingModel as any).validate === 'function') {
      (this.scheduleConfSettingModel as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

