// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsDetailForTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account that is used to submit the quota increase application.
   * 
   * @example
   * 135048337611****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * >  An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.c5.large
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The approval state of the quota increase application. Valid values:
   * 
   * *   Disagree: The application is rejected.
   * *   Agree: The application is approved.
   * *   Process: The application is in review.
   * *   Cancel: The application is canceled.
   * 
   * @example
   * Agree
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      batchQuotaApplicationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
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

