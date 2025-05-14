// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignTicketShrinkRequest extends $dara.Model {
  notifyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eKWh3xxxxiE
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dq9hP8Sk2v6vQxxxxiE
   */
  openTicketId?: string;
  processorUserIdsShrink?: string;
  tenantContextShrink?: string;
  ticketMemoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      notifyShrink: 'Notify',
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      processorUserIdsShrink: 'ProcessorUserIds',
      tenantContextShrink: 'TenantContext',
      ticketMemoShrink: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyShrink: 'string',
      openTeamId: 'string',
      openTicketId: 'string',
      processorUserIdsShrink: 'string',
      tenantContextShrink: 'string',
      ticketMemoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

