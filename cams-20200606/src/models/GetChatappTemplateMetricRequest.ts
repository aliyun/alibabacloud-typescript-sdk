// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID or instance ID of the ISV sub-customer. This is the channel ID. View the channel ID on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-************
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693407714687
   */
  end?: number;
  /**
   * @remarks
   * The metric granularity. Valid values:
   * 
   * - DAILY: Metrics are collected by day.
   * 
   * - HALF_HOUR: Metrics are collected every half an hour.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikd****
   */
  isvCode?: string;
  /**
   * @remarks
   * The language of the template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693107714687
   */
  start?: number;
  /**
   * @remarks
   * The template code. View the template code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1100***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template type. Valid value:
   * 
   * - WHATSAPP
   * 
   * > If you do not pass this parameter, the default value WHATSAPP is used.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      end: 'End',
      granularity: 'Granularity',
      isvCode: 'IsvCode',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
      templateCode: 'TemplateCode',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      end: 'number',
      granularity: 'string',
      isvCode: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'number',
      templateCode: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

