// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScheduleConferenceShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a489c68-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      scheduleConferenceId: 'scheduleConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      scheduleConferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

