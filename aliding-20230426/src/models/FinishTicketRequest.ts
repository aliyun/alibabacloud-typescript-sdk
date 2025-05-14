// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FinishTicketRequestNotify } from "./FinishTicketRequestNotify";
import { FinishTicketRequestTenantContext } from "./FinishTicketRequestTenantContext";
import { FinishTicketRequestTicketMemo } from "./FinishTicketRequestTicketMemo";


export class FinishTicketRequest extends $dara.Model {
  notify?: FinishTicketRequestNotify;
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
  tenantContext?: FinishTicketRequestTenantContext;
  ticketMemo?: FinishTicketRequestTicketMemo;
  static names(): { [key: string]: string } {
    return {
      notify: 'Notify',
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContext: 'TenantContext',
      ticketMemo: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notify: FinishTicketRequestNotify,
      openTeamId: 'string',
      openTicketId: 'string',
      tenantContext: FinishTicketRequestTenantContext,
      ticketMemo: FinishTicketRequestTicketMemo,
    };
  }

  validate() {
    if(this.notify && typeof (this.notify as any).validate === 'function') {
      (this.notify as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(this.ticketMemo && typeof (this.ticketMemo as any).validate === 'function') {
      (this.ticketMemo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

