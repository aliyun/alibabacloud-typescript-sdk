// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransferTicketRequestNotify } from "./TransferTicketRequestNotify";
import { TransferTicketRequestTenantContext } from "./TransferTicketRequestTenantContext";
import { TransferTicketRequestTicketMemo } from "./TransferTicketRequestTicketMemo";


export class TransferTicketRequest extends $dara.Model {
  notify?: TransferTicketRequestNotify;
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
  processorUserIds?: string[];
  tenantContext?: TransferTicketRequestTenantContext;
  ticketMemo?: TransferTicketRequestTicketMemo;
  static names(): { [key: string]: string } {
    return {
      notify: 'Notify',
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      processorUserIds: 'ProcessorUserIds',
      tenantContext: 'TenantContext',
      ticketMemo: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notify: TransferTicketRequestNotify,
      openTeamId: 'string',
      openTicketId: 'string',
      processorUserIds: { 'type': 'array', 'itemType': 'string' },
      tenantContext: TransferTicketRequestTenantContext,
      ticketMemo: TransferTicketRequestTicketMemo,
    };
  }

  validate() {
    if(this.notify && typeof (this.notify as any).validate === 'function') {
      (this.notify as any).validate();
    }
    if(Array.isArray(this.processorUserIds)) {
      $dara.Model.validateArray(this.processorUserIds);
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

