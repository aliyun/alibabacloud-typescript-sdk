// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The category ID of the normalization rule.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The list of normalization rule IDs.
   */
  normalizationRuleIdsShrink?: string;
  /**
   * @remarks
   * The name of the normalization rule.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationRuleName?: string;
  /**
   * @remarks
   * The type of the normalization rule. Valid values:
   * - predefined: predefined normalization rule.
   * - custom: custom normalization rule.
   * 
   * @example
   * predefined
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The normalization schema ID.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * UpdateTime
   */
  orderField?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc
   * - asc.
   * 
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: the Chinese mainland.
   * - ap-southeast-1: outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor ID associated with the normalization rule.
   * 
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleIdsShrink: 'NormalizationRuleIds',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      orderField: 'OrderField',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      normalizationCategoryId: 'string',
      normalizationRuleIdsShrink: 'string',
      normalizationRuleName: 'string',
      normalizationRuleType: 'string',
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      orderField: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

