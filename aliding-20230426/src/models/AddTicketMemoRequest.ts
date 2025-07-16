// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTicketMemoRequestTenantContext extends $dara.Model {
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

export class AddTicketMemoRequestTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * "ticket/image/44xxxx9/43003/e27204b38xxxx1640499.txt
   */
  fileName?: string;
  /**
   * @example
   * wahaha.txt
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTicketMemoRequestTicketMemo extends $dara.Model {
  attachments?: AddTicketMemoRequestTicketMemoAttachments[];
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': AddTicketMemoRequestTicketMemoAttachments },
      memo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTicketMemoRequest extends $dara.Model {
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
  tenantContext?: AddTicketMemoRequestTenantContext;
  ticketMemo?: AddTicketMemoRequestTicketMemo;
  static names(): { [key: string]: string } {
    return {
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContext: 'TenantContext',
      ticketMemo: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTeamId: 'string',
      openTicketId: 'string',
      tenantContext: AddTicketMemoRequestTenantContext,
      ticketMemo: AddTicketMemoRequestTicketMemo,
    };
  }

  validate() {
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

