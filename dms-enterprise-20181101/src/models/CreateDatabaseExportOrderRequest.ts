// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatabaseExportOrderRequestPluginParam } from "./CreateDatabaseExportOrderRequestPluginParam";


export class CreateDatabaseExportOrderRequest extends $dara.Model {
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
   * document_test
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
  pluginParam?: CreateDatabaseExportOrderRequestPluginParam;
  /**
   * @remarks
   * The stakeholders involved in this operation.
   */
  relatedUserList?: number[];
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
      pluginParam: 'PluginParam',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      parentId: 'number',
      pluginParam: CreateDatabaseExportOrderRequestPluginParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  validate() {
    if(this.pluginParam && typeof (this.pluginParam as any).validate === 'function') {
      (this.pluginParam as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

