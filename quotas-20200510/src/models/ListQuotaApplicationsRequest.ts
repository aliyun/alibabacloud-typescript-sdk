// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationsRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
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
   */
  dimensions?: ListQuotaApplicationsRequestDimensions[];
  /**
   * @remarks
   * The keyword that you want to use to search for the application.
   * 
   * @example
   * Cluster
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * csk
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_i5uzm3
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: whitelist quota
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

