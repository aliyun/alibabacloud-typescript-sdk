// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotasRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > The value range of N depends on the number of dimensions supported by the corresponding cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > The value range of N depends on the number of dimensions supported by the corresponding cloud service.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListProductQuotasRequestDimensions[];
  /**
   * @remarks
   * The code of the dimension group.
   * 
   * @example
   * entconsole_w1j3ms****
   */
  groupCode?: string;
  /**
   * @remarks
   * The search keyword for the quota.
   * > This parameter applies only to Elastic Computing Service server instance type quotas (ecs-spec). The search scope includes `QuotaName` and `QuotaActionCode`.
   * 
   * @example
   * security
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single request.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * - Leave this parameter empty for the first request or when no more results are available.
   * - If more results are available, set this parameter to the NextToken value returned when you invoke the previous API call.
   * 
   * @example
   * AAAAAd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * > For more information about how to obtain the abbreviation of a cloud service, see `ProductCode` in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota category.
   * 
   * Default value: CommonQuota.
   * 
   * @example
   * FlowControl
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The sorting method supported by the quota.
   * 
   * > This parameter applies only to Elastic Computing Service server instance type quotas (ecs-spec). If no Settings are specified, it is left empty.
   * 
   * @example
   * TIME
   */
  sortField?: string;
  /**
   * @remarks
   * The sorting method supported by the quota.
   * 
   * > This parameter applies only to Elastic Computing Service server instance type quotas (ecs-spec). If no Settings are specified, it is left empty.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupCode: 'GroupCode',
      keyWord: 'KeyWord',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListProductQuotasRequestDimensions },
      groupCode: 'string',
      keyWord: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

