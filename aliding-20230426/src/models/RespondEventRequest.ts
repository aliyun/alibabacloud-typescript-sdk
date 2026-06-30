// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RespondEventRequestTenantContext extends $dara.Model {
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

export class RespondEventRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  calendarId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  responseStatus?: string;
  tenantContext?: RespondEventRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      responseStatus: 'ResponseStatus',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      responseStatus: 'string',
      tenantContext: RespondEventRequestTenantContext,
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

