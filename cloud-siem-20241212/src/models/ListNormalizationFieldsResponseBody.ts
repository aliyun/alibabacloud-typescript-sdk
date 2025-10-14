// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationFieldsResponseBodyNormalizationFields extends $dara.Model {
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * cloud_user。
   */
  normalizationFieldDescription?: string;
  /**
   * @example
   * 173326*******。
   */
  normalizationFieldExample?: string;
  /**
   * @example
   * cloud_user。
   */
  normalizationFieldName?: string;
  /**
   * @example
   * true。
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @example
   * true。
   */
  normalizationFieldReserved?: boolean;
  /**
   * @example
   * varchar。
   */
  normalizationFieldType?: string;
  /**
   * @example
   * NETWORK_SESSION_ACTIVITY。
   */
  normalizationSchemaId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequirement: 'NormalizationFieldRequirement',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldType: 'NormalizationFieldType',
      normalizationSchemaId: 'NormalizationSchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationCategoryId: 'string',
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldType: 'string',
      normalizationSchemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationFieldsResponseBody extends $dara.Model {
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
  normalizationFields?: ListNormalizationFieldsResponseBodyNormalizationFields[];
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
      normalizationFields: 'NormalizationFields',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      normalizationFields: { 'type': 'array', 'itemType': ListNormalizationFieldsResponseBodyNormalizationFields },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationFields)) {
      $dara.Model.validateArray(this.normalizationFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

