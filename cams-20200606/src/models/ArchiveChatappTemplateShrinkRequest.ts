// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArchiveChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The archive type.
   * 
   * This parameter is required.
   * 
   * @example
   * ARCHIVED
   */
  archiveType?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **WHATSAPP**.
   * 
   * > Only the WhatsApp channel type is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the Space ID on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The template list.
   * 
   * This parameter is required.
   */
  templateListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      archiveType: 'ArchiveType',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      templateListShrink: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveType: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      templateListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

