// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructSyncOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key of an attachment that is returned after the attachment is uploaded. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * upload_3c7edea3-e4c3-4403-857d-737043036f69_test.sql
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The remarks of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  paramShrink?: string;
  /**
   * @remarks
   * The IDs of the stakeholders.
   */
  relatedUserListShrink?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

