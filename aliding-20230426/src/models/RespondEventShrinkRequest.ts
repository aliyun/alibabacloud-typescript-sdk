// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RespondEventShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RHN2REJFc2w4VHNiUUlvcVB0ejFydz09
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * accepted
   */
  responseStatus?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      responseStatus: 'ResponseStatus',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      responseStatus: 'string',
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

