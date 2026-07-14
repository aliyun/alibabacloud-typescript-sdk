// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArchiveChatappTemplateRequestTemplateList extends $dara.Model {
  /**
   * @remarks
   * The template language. For detailed language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * The template code. You can view the template code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Template Design** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 939938****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArchiveChatappTemplateRequest extends $dara.Model {
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
  templateList?: ArchiveChatappTemplateRequestTemplateList[];
  static names(): { [key: string]: string } {
    return {
      archiveType: 'ArchiveType',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveType: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      templateList: { 'type': 'array', 'itemType': ArchiveChatappTemplateRequestTemplateList },
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

