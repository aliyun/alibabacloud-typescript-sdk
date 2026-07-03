// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @remarks
   * The key description of the JSON-type standard field.
   * 
   * @example
   * Cloud Provider Code
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The key example of the JSON-type standard field.
   * 
   * @example
   * alibaba_cloud
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The key source of the JSON-type standard field.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The key name of the JSON-type standard field.
   * 
   * @example
   * cloud_code
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Indicates whether the key of the JSON-type standard field is required.
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a system built-in standard field name.
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * Indicates whether the key of the JSON-type standard field is tokenized.
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The key type of the JSON-type standard field.
   * 
   * @example
   * varchar
   */
  normalizationFieldType?: string;
  /**
   * @remarks
   * The update time.
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

export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @remarks
   * The normalization field description.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The normalization field example.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the standard field. Valid values:
   * - preset: built-in.
   * - custom: custom.
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
   * The key list of the JSON-type standard field.
   */
  normalizationFieldJsonKeys?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * The normalization field name.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Indicates whether the field is required.
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
   * The normalization field type. Valid values:
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
   * The update time.
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
      normalizationFieldJsonIndexAll: 'NormalizationFieldJsonIndexAll',
      normalizationFieldJsonKeys: 'NormalizationFieldJsonKeys',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldRequirement: 'NormalizationFieldRequirement',
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
      normalizationFieldJsonIndexAll: 'boolean',
      normalizationFieldJsonKeys: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys },
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
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

export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences extends $dara.Model {
  /**
   * @remarks
   * The normalization rule ID.
   * 
   * @example
   * alibaba_cloud_cfw_flow_rule
   */
  normalizationRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationRuleId: 'NormalizationRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBodyNormalizationSchema extends $dara.Model {
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
   * The ID of the normalization rule category.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * native
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The list of normalization fields.
   */
  normalizationFields?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields[];
  /**
   * @remarks
   * The normalization schema description.
   * 
   * @example
   * Network 5-Tuple Logs
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * The source of the normalization schema. Valid values:
   * - preset: predefined.
   * - custom: custom.
   * 
   * @example
   * preset
   */
  normalizationSchemaFrom?: string;
  /**
   * @remarks
   * The normalization schema ID.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The normalization schema name.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationSchemaName?: string;
  /**
   * @remarks
   * The list of normalization schema references.
   */
  normalizationSchemaReferences?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences[];
  /**
   * @remarks
   * The normalization schema type. Valid values:
   * - log
   * - entity
   * - incident
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @example
   * DATA_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @example
   * alibaba_cloud_bastionhost
   */
  productId?: string;
  recommendEntities?: string[];
  /**
   * @remarks
   * The Simple Log Service LogStore.
   * 
   * @example
   * network-activity
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service StoreView.
   * 
   * @example
   * network_activity
   */
  targetStoreView?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaFrom: 'NormalizationSchemaFrom',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaReferences: 'NormalizationSchemaReferences',
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
      normalizationFields: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields },
      normalizationSchemaDescription: 'string',
      normalizationSchemaFrom: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaReferences: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences },
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
    if(Array.isArray(this.normalizationFields)) {
      $dara.Model.validateArray(this.normalizationFields);
    }
    if(Array.isArray(this.normalizationSchemaReferences)) {
      $dara.Model.validateArray(this.normalizationSchemaReferences);
    }
    if(Array.isArray(this.recommendEntities)) {
      $dara.Model.validateArray(this.recommendEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The normalization schema.
   */
  normalizationSchema?: GetNormalizationSchemaResponseBodyNormalizationSchema;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationSchema: 'NormalizationSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationSchema: GetNormalizationSchemaResponseBodyNormalizationSchema,
      requestId: 'string',
    };
  }

  validate() {
    if(this.normalizationSchema && typeof (this.normalizationSchema as any).validate === 'function') {
      (this.normalizationSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

