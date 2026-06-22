// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Meta ad account.
   * 
   * @example
   * 2339**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The budget.
   * 
   * @example
   * 62
   */
  budget?: number;
  /**
   * @remarks
   * The budget type.
   * 
   * @example
   * daily
   */
  budgetType?: string;
  /**
   * @remarks
   * The campaign ID.
   * 
   * @example
   * 233**
   */
  campaignId?: string;
  /**
   * @remarks
   * The name of the campaign.
   * 
   * @example
   * campaign-name
   */
  campaignName?: string;
  /**
   * @remarks
   * The time when the campaign was created.
   * 
   * @example
   * 173029392838
   */
  createTime?: number;
  /**
   * @remarks
   * The Page ID for Messenger.
   * 
   * @example
   * 238***
   */
  pageId?: string;
  /**
   * @remarks
   * The status of the campaign.
   * 
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
   * The request status code.
   * 
   * - A value of OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * Example
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListMessageCampaignResponseBodyData[];
  /**
   * @remarks
   * The error message.
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
   * 23**
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
  /**
   * @remarks
   * The total number of records.
   * 
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

