// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTicketRequestTenantContext } from "./GetTicketRequestTenantContext";


export class GetTicketRequest extends $dara.Model {
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
  tenantContext?: GetTicketRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTeamId: 'string',
      openTicketId: 'string',
      tenantContext: GetTicketRequestTenantContext,
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

