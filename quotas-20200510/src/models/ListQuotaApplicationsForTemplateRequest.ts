// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsForTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is in UTC.
   * 
   * > The interval between `ApplyStartTime` and `ApplyEndTime` must be 7 days or less. If you do not set these two parameters, quota applications submitted within the last 7 days are queried.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is in UTC.
   * 
   * > The interval between `ApplyStartTime` and `ApplyEndTime` must be 7 days or less. If you do not set these two parameters, quota applications submitted within the last 7 days are queried.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyStartTime?: string;
  /**
   * @remarks
   * The ID of the batch quota application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The maximum number of results to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the start of the data to read.
   * 
   * > If you do not set this parameter, the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service.
   * 
   * > For more information about how to obtain the abbreviation of an Alibaba Cloud service, see the `ProductCode` parameter in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota. Valid values:
   * 
   * - CommonQuota: general quota.
   * 
   * - FlowControl: API rate limit.
   * 
   * - WhiteListLabel: privilege.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      applyEndTime: 'ApplyEndTime',
      applyStartTime: 'ApplyStartTime',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyEndTime: 'string',
      applyStartTime: 'string',
      batchQuotaApplicationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

