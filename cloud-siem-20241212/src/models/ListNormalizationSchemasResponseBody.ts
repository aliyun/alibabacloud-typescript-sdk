// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationSchemasResponseBodyNormalizationSchemas extends $dara.Model {
  /**
   * @remarks
   * The time when the normalization schema was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the normalization rule category.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The source of the field. Valid values:
   * - normalized: Normalized field.
   * - native: Native field.
   * 
   * @example
   * normalized
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The description of the normalization schema.
   * 
   * @example
   * Network flow log
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * The source of the normalization schema. Valid values: preset and custom.
   * 
   * @example
   * preset
   */
  normalizationSchemaFrom?: string;
  /**
   * @remarks
   * The ID of the normalization schema.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The name of the normalization schema.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationSchemaName?: string;
  /**
   * @remarks
   * The Logstore for normalized output.
   * 
   * @example
   * network-activity
   */
  normalizationSchemaTargetLogStore?: string;
  /**
   * @remarks
   * The type of the normalization schema.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The ID of the security domain.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * sas
   */
  productId?: string;
  /**
   * @remarks
   * The list of recommended entities.
   */
  recommendEntities?: string[];
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   * 
   * @example
   * network-activity
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The StoreView of Simple Log Service.
   * 
   * @example
   * network-activity
   */
  targetStoreView?: string;
  /**
   * @remarks
   * The time when the normalization schema was updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vendor.
   * 
   * @example
   * alibaba
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaFrom: 'NormalizationSchemaFrom',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaTargetLogStore: 'NormalizationSchemaTargetLogStore',
      normalizationSchemaType: 'NormalizationSchemaType',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      productId: 'ProductId',
      recommendEntities: 'RecommendEntities',
      targetLogStore: 'TargetLogStore',
      targetStoreView: 'TargetStoreView',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationFieldSource: 'string',
      normalizationSchemaDescription: 'string',
      normalizationSchemaFrom: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaTargetLogStore: 'string',
      normalizationSchemaType: 'string',
      normalizationSecurityDomainId: 'string',
      productId: 'string',
      recommendEntities: { 'type': 'array', 'itemType': 'string' },
      targetLogStore: 'string',
      targetStoreView: 'string',
      updateTime: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recommendEntities)) {
      $dara.Model.validateArray(this.recommendEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Leave this parameter empty for the first request or when no more results are available. For subsequent requests, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of normalization schemas.
   */
  normalizationSchemas?: ListNormalizationSchemasResponseBodyNormalizationSchemas[];
  /**
   * @remarks
   * The ID of the request.
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
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      normalizationSchemas: 'NormalizationSchemas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationSchemas: { 'type': 'array', 'itemType': ListNormalizationSchemasResponseBodyNormalizationSchemas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationSchemas)) {
      $dara.Model.validateArray(this.normalizationSchemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

