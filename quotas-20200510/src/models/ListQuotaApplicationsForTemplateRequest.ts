// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsForTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The UTC time when the quota application ends.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyEndTime?: string;
  /**
   * @remarks
   * The UTC time when the quota application starts.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  applyStartTime?: string;
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
   * The maximum number of entries to return for a single request.
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
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
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

