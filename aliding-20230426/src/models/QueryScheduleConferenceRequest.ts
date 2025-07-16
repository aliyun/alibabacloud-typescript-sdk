// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScheduleConferenceRequestTenantContext extends $dara.Model {
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

export class QueryScheduleConferenceRequest extends $dara.Model {
  tenantContext?: QueryScheduleConferenceRequestTenantContext;
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
      tenantContext: 'TenantContext',
      scheduleConferenceId: 'scheduleConferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryScheduleConferenceRequestTenantContext,
      scheduleConferenceId: 'string',
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

