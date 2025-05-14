// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateScheduleConfSettingsRequestScheduleConfSettingModel } from "./UpdateScheduleConfSettingsRequestScheduleConfSettingModel";
import { UpdateScheduleConfSettingsRequestTenantContext } from "./UpdateScheduleConfSettingsRequestTenantContext";


export class UpdateScheduleConfSettingsRequest extends $dara.Model {
  scheduleConfSettingModel?: UpdateScheduleConfSettingsRequestScheduleConfSettingModel;
  /**
   * @example
   * f6fb627e-a7e8-403e-b1f8-26e85450f4a9
   */
  scheduleConferenceId?: string;
  tenantContext?: UpdateScheduleConfSettingsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      scheduleConfSettingModel: 'ScheduleConfSettingModel',
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleConfSettingModel: UpdateScheduleConfSettingsRequestScheduleConfSettingModel,
      scheduleConferenceId: 'string',
      tenantContext: UpdateScheduleConfSettingsRequestTenantContext,
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

