// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteListDetailResponseBodyDataAttachment extends $dara.Model {
  /**
   * @remarks
   * The attachment signature.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The attachment ID.
   * 
   * @example
   * 307
   */
  id?: number;
  /**
   * @remarks
   * The attachment name.
   * 
   * @example
   * Course Training
   */
  name?: string;
  /**
   * @remarks
   * The attachment signature.
   * 
   * @example
   * hF2UrEMc4XWy990sh9LGM0+ScI8=
   */
  signature?: string;
  /**
   * @remarks
   * The attachment size in bytes.
   * 
   * @example
   * 111222121
   */
  size?: number;
  /**
   * @remarks
   * The attachment type.
   * 
   * @example
   * image/png
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      id: 'Id',
      name: 'Name',
      signature: 'Signature',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
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
  /**
   * @remarks
   * The AI parsing result (JSON string).
   * 
   * @example
   * {"TouchDate":"2026-07-17 10:00:01"}
   */
  aiResult?: string;
  /**
   * @remarks
   * The attachment list.
   */
  attachment?: CustomerNoteListDetailResponseBodyDataAttachment[];
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13833333333
   */
  contactInformation?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * John
   */
  contactName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 291688841144601701
   */
  creator?: number;
  /**
   * @remarks
   * The logon name of the creator.
   * 
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * XXXX Co., Ltd
   */
  customerName?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1271202085096245
   */
  customerUid?: number;
  /**
   * @remarks
   * The creation time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-05-07 10:27:46
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The note content.
   * 
   * @example
   * Note content
   */
  noteContent?: string;
  /**
   * @remarks
   * The note ID.
   * 
   * @example
   * 1620737
   */
  noteId?: number;
  /**
   * @remarks
   * The note type (CUSTOMER).
   * 
   * @example
   * CUSTOMER
   */
  noteType?: string;
  /**
   * @remarks
   * The note type label.
   * 
   * @example
   * Customer
   */
  noteTypeLabel?: string;
  /**
   * @remarks
   * The touch date (timestamp).
   * 
   * @example
   * 1784266662000
   */
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
  /**
   * @remarks
   * The access denied details returned by the POP API when RAM permissions are missing.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CustomerNoteListDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the POP API.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The prompt message. This is the same as Message.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
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

