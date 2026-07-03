// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRulesResponseBodyNormalizationRulesNormalizationRuleReferences extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_bot_flow_ingestion_173326*******
   */
  dataIngestionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationRulesResponseBodyNormalizationRules extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether non-standard fields are packed into the extend_content field. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The storage mode for extended fields. Valid values: flat (ingest as-is), reject (do not ingest), and pack (pack into the extend_content field).
   * 
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @remarks
   * The category ID of the normalization rule.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * normalized
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The description of the normalization rule.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationRuleDescription?: string;
  /**
   * @remarks
   * The expression of the normalization rule.
   * 
   * @example
   * * | pack-fields -include=\\"[\\s\\S]+\\" as extend_content
   */
  normalizationRuleExpression?: string;
  /**
   * @remarks
   * The format of the normalization rule.
   * 
   * @example
   * SPL
   */
  normalizationRuleFormat?: string;
  /**
   * @remarks
   * The normalization rule ID.
   * 
   * @example
   * nr-z0b2ssjteut85uoh9nzp
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The mode of the normalization rule. Valid values:
   * - both
   * - scan
   * - realtime.
   * 
   * @example
   * both
   */
  normalizationRuleMode?: string;
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
   * The list of associated ingestion policies.
   */
  normalizationRuleReferences?: ListNormalizationRulesResponseBodyNormalizationRulesNormalizationRuleReferences[];
  /**
   * @remarks
   * The status of the normalization rule.
   * 
   * @example
   * started
   */
  normalizationRuleStatus?: string;
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
   * The current version of the normalization rule.
   * 
   * @example
   * V1
   */
  normalizationRuleVersion?: string;
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
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
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
      createTime: 'CreateTime',
      extendContentPacked: 'ExtendContentPacked',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationRuleDescription: 'NormalizationRuleDescription',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleFormat: 'NormalizationRuleFormat',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleReferences: 'NormalizationRuleReferences',
      normalizationRuleStatus: 'NormalizationRuleStatus',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      productId: 'ProductId',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extendContentPacked: 'string',
      extendFieldStoreMode: 'string',
      normalizationCategoryId: 'string',
      normalizationFieldSource: 'string',
      normalizationRuleDescription: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleFormat: 'string',
      normalizationRuleId: 'string',
      normalizationRuleMode: 'string',
      normalizationRuleName: 'string',
      normalizationRuleReferences: { 'type': 'array', 'itemType': ListNormalizationRulesResponseBodyNormalizationRulesNormalizationRuleReferences },
      normalizationRuleStatus: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'string',
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      productId: 'string',
      updateTime: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationRuleReferences)) {
      $dara.Model.validateArray(this.normalizationRuleReferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
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
   * The list of normalization rules.
   */
  normalizationRules?: ListNormalizationRulesResponseBodyNormalizationRules[];
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationRules: 'NormalizationRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationRules: { 'type': 'array', 'itemType': ListNormalizationRulesResponseBodyNormalizationRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationRules)) {
      $dara.Model.validateArray(this.normalizationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

