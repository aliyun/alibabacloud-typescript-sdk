// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteListDetailResponseBodyDataAttachment extends $dara.Model {
  id?: number;
  name?: string;
  signature?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      signature: 'Signature',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      signature: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerNoteListDetailResponseBodyData extends $dara.Model {
  aiResult?: string;
  attachment?: CustomerNoteListDetailResponseBodyDataAttachment[];
  contactInformation?: string;
  contactName?: string;
  creator?: number;
  creatorName?: string;
  customerName?: string;
  customerUid?: number;
  gmtCreate?: string;
  noteContent?: string;
  noteId?: number;
  noteType?: string;
  noteTypeLabel?: string;
  touchDate?: string;
  static names(): { [key: string]: string } {
    return {
      aiResult: 'AiResult',
      attachment: 'Attachment',
      contactInformation: 'ContactInformation',
      contactName: 'ContactName',
      creator: 'Creator',
      creatorName: 'CreatorName',
      customerName: 'CustomerName',
      customerUid: 'CustomerUid',
      gmtCreate: 'GmtCreate',
      noteContent: 'NoteContent',
      noteId: 'NoteId',
      noteType: 'NoteType',
      noteTypeLabel: 'NoteTypeLabel',
      touchDate: 'TouchDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiResult: 'string',
      attachment: { 'type': 'array', 'itemType': CustomerNoteListDetailResponseBodyDataAttachment },
      contactInformation: 'string',
      contactName: 'string',
      creator: 'number',
      creatorName: 'string',
      customerName: 'string',
      customerUid: 'number',
      gmtCreate: 'string',
      noteContent: 'string',
      noteId: 'number',
      noteType: 'string',
      noteTypeLabel: 'string',
      touchDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachment)) {
      $dara.Model.validateArray(this.attachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomerNoteListDetailResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CustomerNoteListDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CustomerNoteListDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

