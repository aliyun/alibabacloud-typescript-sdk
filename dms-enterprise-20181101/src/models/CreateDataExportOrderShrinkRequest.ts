// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataExportOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that provides more instructions for the ticket. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key.
   * 
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the ticket. This parameter helps reduce unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * business_test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the parent ticket.
   * 
   * @example
   * 877****
   */
  parentId?: number;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  pluginParamShrink?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that actually calls the API.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
  /**
   * @remarks
   * The stakeholders involved in this operation.
   */
  relatedUserListShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      parentId: 'ParentId',
      pluginParamShrink: 'PluginParam',
      realLoginUserUid: 'RealLoginUserUid',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      parentId: 'number',
      pluginParamShrink: 'string',
      realLoginUserUid: 'string',
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

