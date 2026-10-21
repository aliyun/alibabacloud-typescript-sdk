// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNormalizationFieldsResponseBodyNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the JSON-type standard field key.
   * 
   * @example
   * alert_level
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The example value of the JSON-type standard field key.
   * 
   * @example
   * 1
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the JSON-type standard field key.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The name of the JSON-type standard field key.
   * 
   * @example
   * alert_level
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Indicates whether the JSON-type standard field key is required.
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the standard field key is a system built-in key.
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * Indicates whether the JSON-type standard field key is tokenized.
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the JSON-type standard field key.
   * 
   * @example
   * text
   */
  normalizationFieldType?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldTokenize: 'NormalizationFieldTokenize',
      normalizationFieldType: 'NormalizationFieldType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
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

export class ListNormalizationFieldsResponseBodyNormalizationFields extends $dara.Model {
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @remarks
   * The normalization category ID.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The description of the normalization field.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The example value of the normalization field.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the JSON-type standard field key.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * Indicates whether indexes are created for all keys of the JSON-type standard field.
   */
  normalizationFieldJsonIndexAll?: boolean;
  /**
   * @remarks
   * The list of keys for the JSON-type standard field.
   */
  normalizationFieldJsonKeys?: ListNormalizationFieldsResponseBodyNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * The name of the normalization field.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Indicates whether the standard field key is required.
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @remarks
   * Indicates whether the normalization field is reserved.
   * 
   * @example
   * true
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * Indicates whether the standard field is tokenized.
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the normalization field. Valid values:
   * - varchar
   * - bigint
   * - double
   * 
   * @example
   * varchar
   */
  normalizationFieldType?: string;
  /**
   * @remarks
   * The normalization schema ID.
   * 
   * @example
   * NETWORK_SESSION_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The security domain ID.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736386610000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldJsonIndexAll: 'NormalizationFieldJsonIndexAll',
      normalizationFieldJsonKeys: 'NormalizationFieldJsonKeys',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldRequirement: 'NormalizationFieldRequirement',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldTokenize: 'NormalizationFieldTokenize',
      normalizationFieldType: 'NormalizationFieldType',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldJsonIndexAll: 'boolean',
      normalizationFieldJsonKeys: { 'type': 'array', 'itemType': ListNormalizationFieldsResponseBodyNormalizationFieldsNormalizationFieldJsonKeys },
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationFieldJsonKeys)) {
      $dara.Model.validateArray(this.normalizationFieldJsonKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNormalizationFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether a next query token exists. Leave this parameter empty for the first query or when no more results are available. If a next page exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of normalization fields.
   */
  normalizationFields?: ListNormalizationFieldsResponseBodyNormalizationFields[];
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
   * 57
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

