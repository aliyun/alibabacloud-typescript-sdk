// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCampaignInsightsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-07-01
   */
  dateStart?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2025-07-29
   */
  dateStop?: string;
  /**
   * @remarks
   * The average cost per delivered message.
   * 
   * @example
   * 2755
   */
  marketingMessagesCostPerDelivered?: string;
  /**
   * @remarks
   * The average cost per message link click. This metric excludes messages sent to Europe, Argentina, Türkiye, South Korea, and Japan.
   * 
   * @example
   * 268
   */
  marketingMessagesCostPerLinkBtnClick?: string;
  /**
   * @remarks
   * The number of messages that are sent by the business and successfully delivered to users. Some messages may fail to deliver if a user\\"s device is unavailable. This metric excludes messages delivered to Europe and Japan. In some cases, this metric is an estimate. The value may differ from the data on your bill due to minor discrepancies during data processing.
   * 
   * @example
   * 2755
   */
  marketingMessagesDelivered?: string;
  /**
   * @remarks
   * The message delivery rate.
   * 
   * @example
   * 79.419238
   */
  marketingMessagesDeliveryRate?: string;
  /**
   * @remarks
   * The number of times users click or tap a marketing message that take users to an on-Meta or off-Meta destination, as specified by the advertiser. This metric excludes messages sent to Europe, Argentina, Türkiye, South Korea, and Japan.
   * 
   * @example
   * 268
   */
  marketingMessagesLinkBtnClick?: string;
  /**
   * @remarks
   * The percentage of delivered messages that received a link click. This metric excludes messages sent to Europe, Argentina, Türkiye, South Korea, and Japan.
   * 
   * @example
   * 79.419238
   */
  marketingMessagesLinkBtnClickRate?: string;
  /**
   * @remarks
   * The number of read messages divided by the number of delivered messages. The read status of some messages may not be captured if a customer disables read receipts. This metric excludes messages sent to Europe and Japan.
   * 
   * @example
   * 79.419238
   */
  marketingMessagesReadRate?: string;
  /**
   * @remarks
   * The total amount spent on a campaign, message group, or message during over its lifetime.
   * 
   * @example
   * 38.87
   */
  marketingMessagesSpend?: string;
  static names(): { [key: string]: string } {
    return {
      dateStart: 'DateStart',
      dateStop: 'DateStop',
      marketingMessagesCostPerDelivered: 'MarketingMessagesCostPerDelivered',
      marketingMessagesCostPerLinkBtnClick: 'MarketingMessagesCostPerLinkBtnClick',
      marketingMessagesDelivered: 'MarketingMessagesDelivered',
      marketingMessagesDeliveryRate: 'MarketingMessagesDeliveryRate',
      marketingMessagesLinkBtnClick: 'MarketingMessagesLinkBtnClick',
      marketingMessagesLinkBtnClickRate: 'MarketingMessagesLinkBtnClickRate',
      marketingMessagesReadRate: 'MarketingMessagesReadRate',
      marketingMessagesSpend: 'MarketingMessagesSpend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateStart: 'string',
      dateStop: 'string',
      marketingMessagesCostPerDelivered: 'string',
      marketingMessagesCostPerLinkBtnClick: 'string',
      marketingMessagesDelivered: 'string',
      marketingMessagesDeliveryRate: 'string',
      marketingMessagesLinkBtnClick: 'string',
      marketingMessagesLinkBtnClickRate: 'string',
      marketingMessagesReadRate: 'string',
      marketingMessagesSpend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCampaignInsightsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - OK: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMessageCampaignInsightsResponseBodyData[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * s39**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: successful.
   * 
   * - false: failed.
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
      code: 'string',
      data: { 'type': 'array', 'itemType': GetMessageCampaignInsightsResponseBodyData },
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

