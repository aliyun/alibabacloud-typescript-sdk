// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCronClearOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment for the ticket. The attachment provides more instructions for this operation.
   * 
   * You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * order_attachement.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the data change. This reduces unnecessary communication.
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
   * The stakeholders of this operation. All stakeholders can view the ticket details and assist in the approval process. Irrelevant users other than Data Management (DMS) administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserListShrink?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  The ID of the tenant is displayed when you move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the Manage DMS tenants topic.
   * 
   * @example
   * 123454324
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

