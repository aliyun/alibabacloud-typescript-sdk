// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteListDetailResponseBodyDataAttachment extends $dara.Model {
  /**
   * @remarks
   * The download URL of the attachment.
   * 
   * @example
   * http://geoip-sdk-user.oss-cn-zhangjiakou.aliyuncs.com/product/v1/ipv4-inner/common/v1.20251010002216.dex?Expires=1760062445&OSSAccessKeyId=x6R87i97yKeKRggz&Signature=****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The ID of the attachment.
   * 
   * @example
   * 307
   */
  id?: number;
  /**
   * @remarks
   * The name of the attachment.
   * 
   * @example
   * Course training
   */
  name?: string;
  /**
   * @remarks
   * The signature of the attachment.
   * 
   * @example
   * hF2UrEMc4XWy990sh9LGM0+ScI8=
   */
  signature?: string;
  /**
   * @remarks
   * The size of the attachment. Unit: bytes.
   * 
   * @example
   * 111222121
   */
  size?: number;
  /**
   * @remarks
   * The type of the attachment.
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
   * The AI analysis result. The value is a JSON string.
   * 
   * @example
   * {"Contact date":"2026-07-17 10:00:01"}
   */
  aiResult?: string;
  /**
   * @remarks
   * The list of attachments.
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
   * The name of the contact.
   * 
   * @example
   * Zhang San
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
   * Zhang San
   */
  creatorName?: string;
  /**
   * @remarks
   * The name of the customer.
   * 
   * @example
   * XXXX Co., Ltd
   */
  customerName?: string;
  /**
   * @remarks
   * The UID of the customer.
   * 
   * @example
   * 1271202085096245
   */
  customerUid?: number;
  /**
   * @remarks
   * The time when the note was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-05-07 10:27:46
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The content of the note.
   * 
   * @example
   * Note content
   */
  noteContent?: string;
  /**
   * @remarks
   * The ID of the note.
   * 
   * @example
   * 1620737
   */
  noteId?: number;
  /**
   * @remarks
   * The type of the note.
   * 
   * @example
   * CUSTOMER
   */
  noteType?: string;
  /**
   * @remarks
   * The name of the note type.
   * 
   * @example
   * Customer
   */
  noteTypeLabel?: string;
  /**
   * @remarks
   * The contact date. The value is a timestamp.
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
   * The detailed information about the access denial returned in the POP API response when the RAM user lacks the required permissions.
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
   * The HTTP status code used in the POP API response.
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
   * The prompt message, which is the same as Message.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
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

