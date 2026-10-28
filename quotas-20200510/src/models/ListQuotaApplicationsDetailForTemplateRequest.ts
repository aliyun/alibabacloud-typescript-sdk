// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsDetailForTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account for which the quota increase is requested.
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
   * The maximum number of records to return for the current query.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which the query starts.
   * 
   * > If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information about how to obtain the abbreviation of an Alibaba Cloud service name, see the `ProductCode` parameter in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
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
   * The quota type. Valid values:
   * 
   * - CommonQuota: General quota.
   * 
   * - FlowControl: API rate limit quota.
   * 
   * - WhiteListLabel: Privilege quota.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The approval status of the quota increase request. Valid values:
   * 
   * - Disagree: The request is rejected.
   * 
   * - Agree: The request is approved.
   * 
   * - Process: The request is in review.
   * 
   * - Cancel: The request is closed.
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

