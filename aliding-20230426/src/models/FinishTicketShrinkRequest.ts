// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishTicketShrinkRequest extends $dara.Model {
  notifyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openTicketId?: string;
  tenantContextShrink?: string;
  ticketMemoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      notifyShrink: 'Notify',
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContextShrink: 'TenantContext',
      ticketMemoShrink: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyShrink: 'string',
      openTeamId: 'string',
      openTicketId: 'string',
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

