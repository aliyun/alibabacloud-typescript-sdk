// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTicketRequestNotify extends $dara.Model {
  groupNoticeReceiverUserIds?: string[];
  /**
   * @example
   * true
   */
  noticeAllGroupMember?: boolean;
  workNoticeReceiverUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupNoticeReceiverUserIds: 'GroupNoticeReceiverUserIds',
      noticeAllGroupMember: 'NoticeAllGroupMember',
      workNoticeReceiverUserIds: 'WorkNoticeReceiverUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
      noticeAllGroupMember: 'boolean',
      workNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.groupNoticeReceiverUserIds);
    }
    if(Array.isArray(this.workNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.workNoticeReceiverUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferTicketRequestTenantContext extends $dara.Model {
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

export class TransferTicketRequestTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * auto-test-1727143229007.pdf
   */
  fileName?: string;
  /**
   * @example
   * key1
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

export class TransferTicketRequestTicketMemo extends $dara.Model {
  attachments?: TransferTicketRequestTicketMemoAttachments[];
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': TransferTicketRequestTicketMemoAttachments },
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

