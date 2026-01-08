// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2339**
   */
  adAccountId?: string;
  /**
   * @example
   * 62
   */
  budget?: number;
  /**
   * @example
   * daily
   */
  budgetType?: string;
  /**
   * @example
   * 233**
   */
  campaignId?: string;
  /**
   * @example
   * campaign-name
   */
  campaignName?: string;
  /**
   * @example
   * 173029392838
   */
  createTime?: number;
  /**
   * @example
   * 238***
   */
  pageId?: string;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      budget: 'Budget',
      budgetType: 'BudgetType',
      campaignId: 'CampaignId',
      campaignName: 'CampaignName',
      createTime: 'CreateTime',
      pageId: 'PageId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      budget: 'number',
      budgetType: 'string',
      campaignId: 'string',
      campaignName: 'string',
      createTime: 'number',
      pageId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageCampaignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  data?: ListMessageCampaignResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 23**
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 70
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMessageCampaignResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

