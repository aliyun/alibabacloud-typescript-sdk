// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > Dimensions.N.Key and Dimensions.N.Value must be specified at the same time. The value range of N depends on the number of dimensions supported by the corresponding cloud service. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the quota dimensions supported by the cloud service. The length of the returned array is the value of N.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > Dimensions.N.Key and Dimensions.N.Value must be specified at the same time. The value range of N depends on the number of dimensions supported by the corresponding cloud service. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the quota dimensions supported by the cloud service. The length of the returned array is the value of N.
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

export class ListQuotaApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions.
   * The properties of the quota item. The combination of dimensions and the quota ID (QuotaActionCode) uniquely identifies a quota item.
   * > The dimensions are required for some cloud services. You can call the [ListProductQuotaDimensions](~~ListProductQuotaDimensions~~) operation to query the quota dimensions supported by a cloud service. The Requisite response parameter indicates whether a dimension is required.
   */
  dimensions?: ListQuotaApplicationsRequestDimensions[];
  /**
   * @remarks
   * The search keyword for quota increase applications.
   * 
   * @example
   * Cluster
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the current query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that specifies the start position of the query. An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_i5uzm3
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * - CommonQuota: General quota.
   * - FlowControl: API rate limit.
   * - WhiteListLabel: Privilege.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The approval status of the quota increase application. Valid values:
   * 
   * - Disagree: Rejected.
   * 
   * - Agree: Approved.
   * 
   * - Process: Under review.
   * 
   * - Cancel: Closed.
   * 
   * - Withdrawn: Withdrawn.
   * 
   * @example
   * Agree
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      keyWord: 'KeyWord',
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
      dimensions: { 'type': 'array', 'itemType': ListQuotaApplicationsRequestDimensions },
      keyWord: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      status: 'string',
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

