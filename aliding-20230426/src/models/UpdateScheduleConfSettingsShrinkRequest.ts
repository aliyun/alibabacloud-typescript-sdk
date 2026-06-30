// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConfSettingsShrinkRequest extends $dara.Model {
  scheduleConfSettingModelShrink?: string;
  scheduleConferenceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleConfSettingModelShrink: 'ScheduleConfSettingModel',
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleConfSettingModelShrink: 'string',
      scheduleConferenceId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

