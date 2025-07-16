// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketOperateRecordRequestTenantContext extends $dara.Model {
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

export class ListTicketOperateRecordRequest extends $dara.Model {
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
  tenantContext?: ListTicketOperateRecordRequestTenantContext;
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
      tenantContext: ListTicketOperateRecordRequestTenantContext,
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

