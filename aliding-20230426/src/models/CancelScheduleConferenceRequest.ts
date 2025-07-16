// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelScheduleConferenceRequestTenantContext extends $dara.Model {
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

export class CancelScheduleConferenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a489xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  tenantContext?: CancelScheduleConferenceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      scheduleConferenceId: 'ScheduleConferenceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleConferenceId: 'string',
      tenantContext: CancelScheduleConferenceRequestTenantContext,
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

