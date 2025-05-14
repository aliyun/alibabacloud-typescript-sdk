// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelScheduleConferenceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a489xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

