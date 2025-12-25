// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketNotesResponseBodyDataAttachments extends $dara.Model {
  /**
   * @remarks
   * Attachment Name
   * 
   * @example
   * 003.jpg
   */
  name?: string;
  /**
   * @remarks
   * Temporary Accessible Attachment Address
   * 
   * @example
   * https://gts-workorder.oss-cn-beijing.aliyuncs.com/20221003/cbc00fb0-b612-4d89-a75b-8d535f750f9f/image.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataDialog extends $dara.Model {
  /**
   * @remarks
   * Work order communication content
   * 
   * @example
   * ECS backup failed
   */
  content?: string;
  /**
   * @remarks
   * The ticket communication record system card will be used when the system card docking capability is opened in the future. At present, the content can be used to obtain plain text content.
   * 
   * @example
   * null
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataUser extends $dara.Model {
  /**
   * @remarks
   * Dialog User Name
   * 
   * @example
   * agent
   */
  name?: string;
  /**
   * @remarks
   * Dialogue user role, distinguish between agent and user.
   * 2 represents agent, 3 represents user.
   * 
   * @example
   * 2
   */
  role?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Attachment List
   */
  attachments?: ListTicketNotesResponseBodyDataAttachments[];
  /**
   * @remarks
   * The timestamp when the communication message was created.
   * 
   * @example
   * 1623396736000
   */
  createTime?: number;
  /**
   * @remarks
   * Work order communication record object
   */
  dialog?: ListTicketNotesResponseBodyDataDialog;
  /**
   * @remarks
   * The unique ID of the conversation record.
   * 
   * @example
   * 9999
   */
  dialogId?: number;
  /**
   * @remarks
   * Communication message status field, reference value Unread=1, Read=2
   * 
   * @example
   * 6
   */
  status?: number;
  /**
   * @remarks
   * Fields Not Used
   * 
   * @example
   * null
   */
  tip?: string;
  /**
   * @remarks
   * Conversation Type 1 card, that is, schema 2 Text, that is, content
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Conversation of users
   */
  user?: ListTicketNotesResponseBodyDataUser;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      createTime: 'CreateTime',
      dialog: 'Dialog',
      dialogId: 'DialogId',
      status: 'Status',
      tip: 'Tip',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyDataAttachments },
      createTime: 'number',
      dialog: ListTicketNotesResponseBodyDataDialog,
      dialogId: 'number',
      status: 'number',
      tip: 'string',
      type: 'number',
      user: ListTicketNotesResponseBodyDataUser,
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(this.dialog && typeof (this.dialog as any).validate === 'function') {
      (this.dialog as any).validate();
    }
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The return code of the request result.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Return value, that is, the dialog record list data of the specified ticket
   */
  data?: ListTicketNotesResponseBodyData[];
  /**
   * @remarks
   * The error message. If success is set to false, the message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the API request. The requestID is unique for each call.
   * 
   * @example
   * AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

