// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyTicketShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Content of the ticket reply
   * 
   * This parameter is required.
   * 
   * @example
   * Why ECS backup failed?
   */
  content?: string;
  /**
   * @remarks
   * Encryption status
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * The list of attachment names, GetAttachmentUploadUrl the ObjectKey field returned by the interface.
   */
  fileNameListShrink?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 0005PYGCW
   */
  ticketId?: string;
  /**
   * @remarks
   * Alibaba Cloud UID
   * 
   * @example
   * 1289427240739141
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      encrypt: 'Encrypt',
      fileNameListShrink: 'FileNameList',
      ticketId: 'TicketId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      encrypt: 'boolean',
      fileNameListShrink: 'string',
      ticketId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

