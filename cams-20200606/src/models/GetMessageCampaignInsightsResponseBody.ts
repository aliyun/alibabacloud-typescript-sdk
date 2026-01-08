// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCampaignInsightsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-07-01
   */
  dateStart?: string;
  /**
   * @example
   * 2025-07-29
   */
  dateStop?: string;
  /**
   * @example
   * 2755
   */
  marketingMessagesCostPerDelivered?: string;
  /**
   * @example
   * 268
   */
  marketingMessagesCostPerLinkBtnClick?: string;
  /**
   * @example
   * 2755
   */
  marketingMessagesDelivered?: string;
  /**
   * @example
   * 79.419238
   */
  marketingMessagesDeliveryRate?: string;
  /**
   * @example
   * 268
   */
  marketingMessagesLinkBtnClick?: string;
  /**
   * @example
   * 79.419238
   */
  marketingMessagesLinkBtnClickRate?: string;
  /**
   * @example
   * 79.419238
   */
  marketingMessagesReadRate?: string;
  /**
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
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetMessageCampaignInsightsResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * s39**
   */
  requestId?: string;
  /**
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

