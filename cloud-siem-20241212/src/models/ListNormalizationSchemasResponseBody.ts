// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationSchemasResponseBodyNormalizationSchemas extends $dara.Model {
  /**
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * 网络五元组日志
   */
  normalizationSchemaDescription?: string;
  /**
   * @example
   * preset
   */
  normalizationSchemaFrom?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationSchemaName?: string;
  /**
   * @example
   * network-activity。
   */
  normalizationSchemaTargetLogStore?: string;
  /**
   * @example
   * network-activity
   */
  targetLogStore?: string;
  /**
   * @example
   * network-activity
   */
  targetStoreView?: string;
  /**
   * @example
   * 1736386610000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaFrom: 'NormalizationSchemaFrom',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaTargetLogStore: 'NormalizationSchemaTargetLogStore',
      targetLogStore: 'TargetLogStore',
      targetStoreView: 'TargetStoreView',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationSchemaDescription: 'string',
      normalizationSchemaFrom: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaTargetLogStore: 'string',
      targetLogStore: 'string',
      targetStoreView: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationSchemasResponseBody extends $dara.Model {
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
  normalizationSchemas?: ListNormalizationSchemasResponseBodyNormalizationSchemas[];
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * 57。
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

