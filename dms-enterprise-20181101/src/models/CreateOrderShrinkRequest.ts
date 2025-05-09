// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key of an attachment that is returned after the attachment is uploaded. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * test_AttachmentKey
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The description of the ticket to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ticket creation parameter. The value is a JSON string. The value of this parameter differs based on the type of the ticket. For more information, see the **PluginParam parameter** section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * {PluginParam_test}
   */
  pluginParamShrink?: string;
  /**
   * @remarks
   * The type of the ticket. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_EXPORT
   */
  pluginType?: string;
  /**
   * @remarks
   * The IDs of the stakeholders that are involved in the ticket. Separate multiple IDs with commas (,).
   * 
   * @example
   * user1,user2
   */
  relatedUserList?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      pluginParamShrink: 'PluginParam',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      pluginParamShrink: 'string',
      pluginType: 'string',
      relatedUserList: 'string',
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

