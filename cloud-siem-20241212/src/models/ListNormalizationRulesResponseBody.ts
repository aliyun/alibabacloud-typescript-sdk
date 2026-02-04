// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationRulesResponseBodyNormalizationRulesNormalizationRuleReferences extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_bot_flow_ingestion_173326*******。
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
   * @example
   * 1733269771123。
   */
  createTime?: number;
  extendContentPacked?: string;
  /**
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationRuleDescription?: string;
  /**
   * @example
   * * | pack-fields -include=\\"[\\s\\S]+\\" as extend_content。
   */
  normalizationRuleExpression?: string;
  /**
   * @example
   * SPL。
   */
  normalizationRuleFormat?: string;
  /**
   * @example
   * nr-z0b2ssjteut85uoh9nzp。
   */
  normalizationRuleId?: string;
  /**
   * @example
   * both。
   */
  normalizationRuleMode?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationRuleName?: string;
  normalizationRuleReferences?: ListNormalizationRulesResponseBodyNormalizationRulesNormalizationRuleReferences[];
  /**
   * @example
   * started。
   */
  normalizationRuleStatus?: string;
  /**
   * @example
   * predefined。
   */
  normalizationRuleType?: string;
  /**
   * @example
   * V1。
   */
  normalizationRuleVersion?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * 1733269771123。
   */
  updateTime?: number;
  /**
   * @example
   * alibaba_cloud。
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extendContentPacked: 'ExtendContentPacked',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      normalizationCategoryId: 'NormalizationCategoryId',
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
   * @example
   * 50。
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****。
   */
  nextToken?: string;
  normalizationRules?: ListNormalizationRulesResponseBodyNormalizationRules[];
  /**
   * @example
   * 1。
   */
  pageNumber?: number;
  /**
   * @example
   * 2。
   */
  pageSize?: number;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * 5。
   */
  totalCount?: number;
  /**
   * @example
   * 1。
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

