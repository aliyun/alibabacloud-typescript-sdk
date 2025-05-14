// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleConfSettingsShrinkRequest extends $dara.Model {
  scheduleConfSettingModelShrink?: string;
  /**
   * @example
   * f6fb627e-a7e8-403e-b1f8-26e85450f4a9
   */
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

