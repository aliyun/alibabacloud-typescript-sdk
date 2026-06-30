// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketShrinkRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTeamId: 'string',
      openTicketId: 'string',
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

